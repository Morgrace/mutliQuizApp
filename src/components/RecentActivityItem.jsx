import { svg } from '../variables/svg';
function RecentActivityItem() {
  return svg.map(({ color, href: path, name }) => (
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
        <span className="text-[.8rem]">50 Questions </span>
      </div>
      <span
        className={`!ml-auto rounded-[50%] bg-[${color}] flex aspect-[1] items-center border-[.2rem] !p-[.5rem] text-[.8rem] border-[${color}]`}
      >
        20/30
      </span>
    </li>
  ));
}

export default RecentActivityItem;
