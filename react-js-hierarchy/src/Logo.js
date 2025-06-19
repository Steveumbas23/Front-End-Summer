const Logo = ({ headerChange }) => {
  const logo = "Logo";
  return (
    <div className="logo">
      <h1>{logo}</h1>
      <button onClick={headerChange}>Click Me</button>
    </div>
  );
};

export default Logo;
