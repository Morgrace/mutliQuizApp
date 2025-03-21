import { useEffect, useRef } from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { setLocalStorage } from './setLocalStorage';

function useFetchQuestion(quizType) {
  const { dispatch, state } = useQuiz();

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!quizType || hasFetched.current || state[quizType].questions.length > 0)
      return;

    hasFetched.current = true;

    let URL;
    switch (quizType) {
      case 'general':
        URL = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';
        break;
      case 'mathematics':
        URL = 'https://opentdb.com/api.php?amount=10&category=19&type=multiple';
        break;
      case 'nature':
        URL = 'https://opentdb.com/api.php?amount=10&category=17&type=multiple';
        break;
      case 'sports':
        URL = 'https://opentdb.com/api.php?amount=10&category=21&type=multiple';
        break;
      case 'random':
        URL = 'https://opentdb.com/api.php?amount=10&type=multiple';
        break;
      default:
        throw new Error(`Unknown quiz type: ${quizType}`);
    }

    (async function fetchQuestions() {
      dispatch({ type: 'loading', payload: quizType });
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Failed to fetch questions');
        const data = await response.json();
        dispatch({ type: `${quizType}/questions`, payload: data.results });
        setLocalStorage(quizType, data.results);
      } catch (error) {
        console.error('Error fetching quiz questions:', error);
        dispatch({ type: 'rejected', payload: error.message });
      }
    })();
  }, [dispatch, quizType, state]); // Dependencies updated
}

export default useFetchQuestion;
