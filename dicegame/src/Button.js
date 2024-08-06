function Button({children, onClick, buttonType, color = 'blue'}) {
  let classNames = `Button ${buttonType} ${color}`;
  return <button className={classNames} onClick={onClick}>{children}</button>;
}

export default Button;