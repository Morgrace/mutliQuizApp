import { useEffect, useMemo } from 'react';
import { useReducerContext } from '../Hooks/StartContext';
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

function QuizOptions({ hasAnswered }) {
  const {
    state: {
      general = [],
      index,
      generalQuestionOrder,
      generalQuestionUserAnswer,
    },
    dispatch,
  } = useReducerContext();

  const correctAnswer = general.at(index)?.correct_answer;
  const options = useMemo(
    function () {
      const currentQuestion = general.at(index);
      if (!currentQuestion) return [];
      const allOptions = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ];
      return shuffleArray(allOptions);
    },
    [index, general]
  );

  const optionStore = generalQuestionOrder.at(index)
    ? generalQuestionOrder.at(index)
    : options;
  const selectedAnswer = generalQuestionUserAnswer[index]?.selected || null;

  useEffect(
    function () {
      if (generalQuestionOrder.at(index) || options.length === 0) return;
      dispatch({ type: 'setShuffled', payload: { options, index } });
    },
    [index, dispatch, options, generalQuestionOrder]
  );
  function handleSelectOption(option) {
    dispatch({ type: 'answered', payload: { option, correctAnswer, index } });
  }

  return optionStore.map((option, i) => {
    return (
      <button
        disabled={hasAnswered}
        onClick={() => handleSelectOption(option)}
        key={i}
        className={` ${
          hasAnswered && selectedAnswer === option
            ? option === correctAnswer
              ? 'bg-green-300'
              : 'bg-red-300 font-semibold'
            : ''
        } shadow-(--box-shadow-2) duration-10 col-span-2 rounded-sm !p-3 text-[1.2rem] transition-colors `}
      >
        {decodeHTML(option)}
      </button>
    );
  });
}

export default QuizOptions;
