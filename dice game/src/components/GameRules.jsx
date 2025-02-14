



function GameRules(props) {

  return (
    <div className={`${props.isRules ? "" : "hidden"} bg-amber-100 w-4xl p-8 mx-auto my-12 rounded-md`}>

      <h2 className="font-[Iceland] font-bold text-3xl mb-4">How to play dice game</h2>
      <ul className="font-[Iceland] font-bold text-xl list-disc px-8">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>after click on  dice  if selected number is equal to dice number you will get same point as dice</li>
        <li>if you get wrong guess then  2 point will be deducted</li>
      </ul>
    </div>
  )
}

export default GameRules