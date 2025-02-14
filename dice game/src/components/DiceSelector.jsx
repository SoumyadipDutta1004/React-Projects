

function DiceSelector(props) {
  const diceNumber = [1, 2, 3, 4, 5, 6];

  

  return (
    <div className="flex flex-col items-end gap-4">
      <div className="flex gap-4">
        {diceNumber.map((num) => {
          return (
            <div
              key={num}
              onClick={() => props.setSelectedNumber(num)}
              className={`${num === props.selectedNumber ? "bg-black text-white" : ""} dice-selector`}>
              {num}
            </div>
          );
        })}
      </div>
      <h2 className="font-[Iceland] font-bold text-4xl">Select Number</h2>
    </div>
  )
}

export default DiceSelector