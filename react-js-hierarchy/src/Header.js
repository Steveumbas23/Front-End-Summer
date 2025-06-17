import Generations from "./Generations";
import Logo from "./Logo";

const Header = () => {
  const header = "Header";
  return (
    <div className="header">
      <div className="header-content">
        <Logo />
        <h1 className="header-text">{header}</h1>
      </div>
      <Generations />
    </div>
  );
};

export default Header;
