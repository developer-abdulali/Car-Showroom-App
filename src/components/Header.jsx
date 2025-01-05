import { Link } from "react-router-dom";
import ButtonSecondary from "./ButtonSecondary";

const Header = () => {
  return (
    <header className="h-[80px] bg-black/20 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10 flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* logo */}
        <Link to="/" className="relative w-[184px] h-[22px] flex">
          <img src="/logo.svg" alt="logo" className="object-contain" />
        </Link>

        {/* btn */}
        <ButtonSecondary btnText="Get started" />
      </div>
    </header>
  );
};
export default Header;
