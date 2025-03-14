import { useReducerContext } from '../Hooks/StartContext';
import { svg } from '../variables/svg';
function QuizListItem() {
  const { dispatch } = useReducerContext();
  return svg.map(({ color, href: path, name }) => (
    <li
      onClick={() =>
        dispatch({ type: 'select', payload: `${name.toLowerCase()}` })
      }
      key={name}
      role="button"
      className="grid justify-items-center gap-2"
    >
      <figure className="rounded-md bg-[rgba(171,194,227,.18)] !p-[.5rem_1.2rem]">
        <svg className={`h-[3rem] w-[3rem] fill-[${color}]`}>
          <use href={path}></use>
        </svg>
      </figure>
      <span className="text-[.8rem] uppercase">{name}</span>
    </li>
  ));
}

export default QuizListItem;
