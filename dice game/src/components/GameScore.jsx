



function GameScore(props) {

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-[Iceland] font-bold text-9xl h-28">{props.score}</h2>
      <h2 className="font-[Iceland] font-bold text-4xl">Total Score</h2>
    </div>
  )
}

export default GameScore