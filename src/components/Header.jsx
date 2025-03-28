import Carousel from "./Carousel";
import DiamondToken from "./DiamondToken";
import UserAccount from "./UserAccount";

const Header = function () {
  return (
    <header className="grid grid-cols-2 gap-8">
      <UserAccount />
      <DiamondToken />
      <Carousel />
    </header>
  );
};

export default Header;
