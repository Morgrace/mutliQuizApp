import { useNavigate } from "react-router-dom";

const icons = [
  "/img/icomoon/sprite.svg#icon-home",
  "/img/icomoon/sprite.svg#icon-grid",
  "/img/icomoon/sprite.svg#icon-heart",
  "/img/icomoon/sprite.svg#icon-user-o",
];

function FooterIconListItem() {
  const navigate = useNavigate();
  function handleClick() {
    if (
      window.confirm("developmental: Do you want to reset all game progress?")
    ) {
      localStorage.clear();
      window.location.reload();
    } else navigate("/");
  }
  return icons.map((path) => (
    <li onClick={handleClick} key={path} role="button">
      <svg className="h-[2.2rem] w-[2.2rem] fill-gray-500">
        <use href={path}></use>
      </svg>
    </li>
  ));
}

export default FooterIconListItem;
