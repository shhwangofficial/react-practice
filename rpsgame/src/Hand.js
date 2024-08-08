import Handicon from "./Handicon";
function Hand({ value, won = 0 }) {
  let handClassNames = "Hand";
  if (won > 0) {
    handClassNames += " winner";
  }
  return (
    <div className={handClassNames}>
      <Handicon className="Hand-icon" value={value} />
    </div>
  );
}

export default Hand;
