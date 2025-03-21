import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useQuiz } from '../contexts/QuizContext';

function Results() {
  const {
    state: { generalScore, general },
  } = useQuiz();
  return (
    <div className=" flex  h-[100vh] flex-col items-center gap-8 !p-[10rem_2rem_0]">
      <div
        className="bg-(--color-blue) flex aspect-square items-center
        justify-center rounded-[50%] !p-16 outline-8 outline-offset-4 outline-[#407DD8]"
      >
        <h3 className=" text-center text-[2.4rem] text-white">
          Your Score{' '}
          <span className="block text-[3.2rem]">
            {generalScore}/{general.length}
          </span>
        </h3>
      </div>

      <h3 className="text-(--color-blue) !m-[2rem_0_4rem] text-center text-[2.4rem] font-medium">
        Congratulations
        <span className="block text-2xl ">{getMessage(generalScore)}</span>
      </h3>

      <div className=" !mt-auto grid gap-10 self-stretch text-2xl  text-white">
        <button onClick={handleShare} className="bg-(--color-blue) !p-8">
          Share
        </button>

        <Link className="bg-(--color-blue) !p-8 text-center" to="/">
          Back to Home
        </Link>
      </div>

      <Footer className="!mt-auto self-stretch" />
    </div>
  );

  function getMessage(score, userName = '') {
    if (score >= 80) {
      return `Amazing work! ${userName} You're a quiz master!`;
    } else if (score >= 50) {
      return `Good job! ${userName} Keep practicing to improve even more!`;
    } else {
      return `Don't worry ${userName}, keep trying and you'll get better!`;
    }
  }

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Quiz App Results',
          text: `I scored ${generalScore}/${general.length} on the quiz!`,
          url: window.location.href, // Or a specific URL you want to share
        });
        alert('Thanks for sharing!');
      } catch (error) {
        alert('Error sharing', error);
      }
    } else {
      // Fallback if Web Share API is not available
      alert('Sharing is not supported in your browser. Please copy the link.');
    }
  }
}

export default Results;
