import Button from "./Button"




function StartGame(props) {

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="image">
        <img src="./dice-main.png" alt="dice image" width={649} height={522}/>
      </div>
      <div className="flex flex-col items-end gap-6">
        <h1 className="font-[Iceland] font-bold text-8xl">DICE GAME</h1>
        <Button onclick={props.toggleGame} btnText="Play Now"/>
      </div>
    </div>
  )
}

export default StartGame