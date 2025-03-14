import { useEffect, useRef } from 'react';
import { useReducerContext } from './StartContext';
function useFetchQuestion(quizType) {
  const { dispatch } = useReducerContext();
  const hasFetched = useRef(false);
  useEffect(
    function () {
      if (!quizType) return;
      if (hasFetched.current) return;
      hasFetched.current = true;
      let URL;
      if (quizType === 'general')
        URL = 'https://opentdb.com/api.php?amount=10&category=9&type=multiple';
      // if (state[quizType]?.length !== 0 || !quizType || !URL) return;

      (async function () {
        try {
          dispatch({ type: 'loading' });
          const response = await fetch(URL);
          const data = await response.json();
          dispatch({ type: quizType, payload: data.results });
        } catch (error) {
          console.error(error);
        } finally {
          dispatch({ type: 'finishedLoading' });
        }
      })();
    },
    [dispatch, quizType]
  );
}

export default useFetchQuestion;
