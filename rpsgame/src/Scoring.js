function Scoring({ who, scoring }){
  let score = Number(scoring);
  return(
    <div className="Score">
      <div className="Score-num">{score}</div>
      <div className="Score-name">{who}</div>
    </div>
  );
}

export default Scoring;