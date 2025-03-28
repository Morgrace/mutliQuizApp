import { useQuiz } from "../contexts/QuizContext";
import { svg } from "../variables/svg";
function RecentActivityItem() {
  const { state } = useQuiz();

  return svg.map(({ color, href: path, name }) => {
    const quiz = state[name.toLowerCase()];
    const quizLength = quiz.questions.length;
    const score = quiz.score;
    const scorePercentage = (score / quizLength) * 100;

    return quizLength ? (
      <li
        key={name}
        role="button"
        className="shadow-(--box-shadow) flex items-center gap-2 rounded-md !p-[1.2rem]"
      >
        <figure className="bg-[rgba(171,194,227,0.18)] !p-[.5rem_1.5rem]">
          <svg className={`h-[3rem] w-[3rem] fill-[${color}]`}>
            <use href={path}></use>
          </svg>
        </figure>
        <div className="grid">
          <span className=" uppercase">{name}</span>
          <span className="text-[.8rem]">{quizLength} Questions </span>
        </div>
        {/* credits : https://preline.co/docs/progress.html */}
        {/* Gauge Component with dynamic color and font-size */}
        <div
          className="size-15 relative !ml-auto"
          style={{ fontSize: "0.8rem", color: color }}
        >
          <svg
            className="size-full rotate-[135deg]"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle (Gauge) */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current"
              style={{ color: "lightgray" }} // Adjust if needed
              strokeWidth="1"
              strokeDasharray="75 100"
              strokeLinecap="round"
            ></circle>

            {/* Gauge Progress */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-current"
              style={{ color: color }}
              strokeWidth="2"
              strokeDasharray={`${scorePercentage} 100`} // controls the progress
              strokeLinecap="round"
            ></circle>
          </svg>

          {/* Value Text */}
          <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
            <span className="font-bold" style={{ color: color }}>
              {score}
            </span>
            <span className="block" style={{ color: color }}>
              Score
            </span>
          </div>
        </div>
      </li>
    ) : null;
  });
}

export default RecentActivityItem;
