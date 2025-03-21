import { useEffect, useMemo } from 'react';
import { useQuiz } from '../contexts/QuizContext';
import decodeHTML from '../functions/decodeHTML';

function shuffleArray(array) {
  // Create a copy of the array so as not to mutate the original
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function QuizOptions({ hasAnswered, quizData }) {
  const { state, dispatch } = useQuiz();
  const { index, type } = state;

  // Access nested properties from quizData
  const storedOptions = quizData.storedOptions;
  const currentQuestion = quizData.questions.at(index);
  const correctAnswer = currentQuestion?.correct_answer;
  const selectedAnswer = quizData.userAnswers[index]?.selected || null;

  // Create options from the current question
  const options = useMemo(() => {
    if (!currentQuestion) return [];
    // Flatten the incorrect answers and add the correct answer.
    const allOptions = [
      ...(Array.isArray(currentQuestion.incorrect_answers)
        ? currentQuestion.incorrect_answers
        : []),
      currentQuestion.correct_answer,
    ];
    return shuffleArray(allOptions);
  }, [currentQuestion]);

  // Use stored options if they exist; otherwise use the freshly shuffled options
  const optionStored = storedOptions?.at(index)
    ? storedOptions.at(index)
    : options;

  useEffect(() => {
    // If the options for this index are not stored and options exist, store them.
    if (storedOptions?.at(index) || options.length === 0) return;
    dispatch({
      type: 'question/option/stored',
      payload: { type, options, index },
    });
  }, [dispatch, index, options, storedOptions, type]);

  function handleSelectOption(option) {
    dispatch({
      type: 'question/answered',
      payload: { option, correctAnswer, index, type },
    });
  }

  return optionStored.map((option, i) => (
    <button
      disabled={hasAnswered}
      onClick={() => handleSelectOption(option)}
      key={i}
      className={`${
        hasAnswered && selectedAnswer === option
          ? option === correctAnswer
            ? 'bg-green-300'
            : 'bg-red-300 font-semibold'
          : ''
      } shadow-(--box-shadow-2) duration-10 col-span-2 rounded-sm !p-3 text-[1.2rem] transition-colors`}
    >
      {decodeHTML(option)}
    </button>
  ));
}

export default QuizOptions;
