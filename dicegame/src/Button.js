function Button({children, onClick, buttonType, color = 'blue'}) {
  let classNames = `Button ${buttonType} ${color}`;
  console.log('classNames:', classNames); 
  return <button className={classNames} onClick={onClick}>{children}</button>;
}

export default Button;