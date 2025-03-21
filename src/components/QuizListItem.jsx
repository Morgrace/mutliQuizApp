import { Link } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';
import { svg } from '../variables/svg';
function QuizListItem() {
  const { dispatch } = useQuiz();
  return svg.map(({ color, href: path, name }) => (
    <li
      onClick={() =>
        dispatch({ type: 'quiz/select', payload: `${name.toLowerCase()}` })
      }
      key={name}
      role="button"
    >
      {' '}
      <Link to={`question/${name}`} className="grid justify-items-center gap-2">
        <figure className="rounded-md bg-[rgba(171,194,227,.18)] !p-[.5rem_1.2rem]">
          <svg className={`h-[3rem] w-[3rem] fill-[${color}]`}>
            <use href={path}></use>
          </svg>
        </figure>
        <span className="text-[.8rem] uppercase">{name}</span>
      </Link>
    </li>
  ));
}

export default QuizListItem;
