import "./Header.scss";

const Header = (props) => {
  const {
    headingText,
    subheadingText,
    isLeftAlign,
    subheadingSecondLine,
    isAlternative,
  } = props;
  let headerClassName = "header";
  if (isLeftAlign) headerClassName += " header--left-align";
  if (isAlternative) headerClassName += " header--alternative";

  return (
    <div className={headerClassName}>
      {headingText && <h1 className="header__heading"> {headingText} </h1>}
      {subheadingText && (
        <h2 className="header__subheading">{subheadingText}</h2>
      )}
      {subheadingSecondLine && (
        <h2 className="header__subheading">{subheadingSecondLine}</h2>
      )}
    </div>
  );
};

export default Header;
