import { Link } from "react-router-dom";
import { useQuiz } from "../contexts/QuizContext";
// const imageSlide = [
//   '/img/trophy-1.jpg',
//   '/img/trophy-2.jpg',
//   '/img/trophy-3.jpg',

// ];
function Carousel() {
  const { dispatch } = useQuiz();
  function handleClick() {
    dispatch({ type: "quiz/select", payload: "random" });
  }
  return (
    <div className=" bg-(image:--bg-header) font-(family-name:--kufam) col-span-2 grid h-[20vh] w-full rounded-md bg-cover bg-center bg-no-repeat !p-[1.5rem_2.5rem]">
      <div className="grid w-[70%] text-[var(--offwhite)]">
        <h1 className="text-[1.4rem] font-bold">
          Test Your Knowledge with Quizzes
        </h1>
        <p className=" font-semibold">
          You're just looking for a playful way to learn <br />
          new facts, our quizzes are designed to <br /> entertain and educate.
        </p>
        <Link
          to="question/random"
          className="flex items-center justify-self-start rounded-[3px]  bg-[#ffffff] !p-[.1rem_1rem] text-[1rem] font-semibold text-[#094298]"
          onClick={handleClick}
        >
          Play Now
        </Link>
      </div>
    </div>
  );
}

export default Carousel;
