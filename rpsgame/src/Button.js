import Handicon from './Handicon';

function Button({ value, onClick }){
  const handleClick = () => onClick(value);
  return(
  <button className='HandButton' onClick={handleClick}>
    <Handicon className="HandButton-icon" value={value} />
  </button>);
}

export default Button