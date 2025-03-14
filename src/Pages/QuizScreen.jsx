import { useState } from 'react';
import Loader from '../components/Loader';
import QuizOptions from '../components/QuizOptions';
import { useReducerContext } from '../Hooks/StartContext';
import useFetchQuestion from '../Hooks/useFetchQuestion';
import decodeHTML from '../functions/decodeHTML';

// import { useEffect, useRef, useState } from 'react';

function QuizScreen() {
  const {
    state: { general = [], type, index, isLoading, generalQuestionUserAnswer },
    dispatch,
  } = useReducerContext();
  const [toggleSeeResult, setToggleSeeResult] = useState(false);
  const hasAnswered = generalQuestionUserAnswer[index]?.hasAnswered || false;

  useFetchQuestion(type);
  // console.log(general, type);
  const questionType = general;
  const questionLength = questionType.length || 0;

  return isLoading ? (
    <Loader />
  ) : (
    <div className="!p-4">
      <div className="!mb-12 grid justify-center text-center">
        <h3 className="text-[1.4rem] capitalize">{type} Quesitons</h3>
        <span>{questionLength} questions</span>
      </div>

      <div className="!mb-10 grid grid-cols-2 gap-4 rounded-xl !p-6 shadow-[var(--box-shadow-1)]">
        <h4 className=" text-(--color-blue)">
          Questions {`${index + 1}/${questionLength}`}
        </h4>
        <span className=" justify-self-end text-[#A02525]">Quit</span>

        <h3 className="col-span-2 text-[1.4rem] ">
          {decodeHTML(questionType?.at(index)?.question)}
        </h3>
        <QuizOptions hasAnswered={hasAnswered} />

        <div className="col-span-2 grid gap-4 justify-self-start !p-3 ">
          <button
            disabled={!hasAnswered}
            onClick={() => setToggleSeeResult(value => !value)}
            className="text-(--color-blue) justify-self-start"
          >
            see Results &#9660;
          </button>
          {toggleSeeResult && (
            <span className="text-[green]">
              {decodeHTML(general.at(index).correct_answer)}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => dispatch({ type: 'previousQuestion' })}
          className="bg-(--color-blue) rounded-md !p-3 text-[1.4rem] text-white"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-(--color-blue) rounded-md !p-[.7rem_1.7rem] text-[1.4rem] text-white"
        >
          {index === questionLength - 1 ? 'Finsh' : 'Next'}
        </button>
      </div>
    </div>
  );
  function handleNext() {
    dispatch({ type: 'nextQuestion' });
    setToggleSeeResult(false);
  }
}

export default QuizScreen;
