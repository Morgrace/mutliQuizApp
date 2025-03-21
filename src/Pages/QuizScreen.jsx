import { useState } from 'react';
import Loader from '../components/Loader';
import QuizOptions from '../components/QuizOptions';
import { useQuiz } from '../contexts/QuizContext';
import useFetchQuestion from '../Hooks/useFetchQuestion';
import decodeHTML from '../functions/decodeHTML';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function QuizScreen() {
  const { state, dispatch } = useQuiz();
  const { type, index, isLoading, finish } = state;
  const [toggleSeeResult, setToggleSeeResult] = useState(false);
  const navigate = useNavigate();

  // Instead of using 'questionType', get the quiz data from state using 'type'
  const quizData = state[type]; // quizData should have { questions, score, storedOptions, userAnswers }
  const userAnswer = quizData.userAnswers;
  const hasAnswered = userAnswer[index]?.hasAnswered || false;

  // Access questions from quizData instead of expecting state[type] to be an array
  const questionLength = quizData.questions.length;

  useFetchQuestion(type);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex h-[100vh] flex-col justify-center !p-4">
      <div className="!mb-12 grid justify-center text-center">
        <h3 className="text-[1.4rem] capitalize">{type} Questions</h3>
        <span>{questionLength} questions</span>
      </div>

      <div className="!mb-10 grid grid-cols-2 gap-4 rounded-xl !p-6 shadow-[var(--box-shadow-1)]">
        <h4 className="text-(--color-blue)">
          Question {`${index + 1}/${questionLength}`}
        </h4>
        <span className="justify-self-end text-[#A02525]">Quit</span>

        <h3 className="col-span-2 text-[1.4rem]">
          {decodeHTML(quizData.questions.at(index)?.question)}
        </h3>

        {/* Pass quizData or current question to QuizOptions */}
        <QuizOptions quizData={quizData} hasAnswered={hasAnswered} />

        <div className="col-span-2 grid gap-4 justify-self-start !p-3">
          <button
            disabled={!hasAnswered}
            onClick={() => setToggleSeeResult(value => !value)}
            className="text-(--color-blue) justify-self-start"
          >
            See Results &#9660;
          </button>
          {toggleSeeResult && (
            <span className="text-[green]">
              {decodeHTML(quizData.questions.at(index).correct_answer)}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => dispatch({ type: 'question/prev' })}
          className="bg-(--color-blue) rounded-md !p-3 text-[1.4rem] text-white"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-(--color-blue) rounded-md !p-[.7rem_1.7rem] text-[1.4rem] text-white"
        >
          {index === questionLength - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
      <Footer className="!mt-auto self-stretch" />
    </div>
  );

  function handleNext() {
    dispatch({ type: 'question/next' });
    setToggleSeeResult(false);
    if (finish) navigate('/results', { replace: true });
  }
}

export default QuizScreen;
