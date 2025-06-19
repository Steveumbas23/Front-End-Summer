import Generations from "./Generations";
import Logo from "./Logo";

const Header = ({ text, headerChange }) => {
  // const header = "Header";
  return (
    <div className="header">
      <div className="header-content">
        <Logo headerChange={headerChange} />
        <h1 className="header-text">{text}</h1>
      </div>
      <Generations />
    </div>
  );
};

export default Header;
