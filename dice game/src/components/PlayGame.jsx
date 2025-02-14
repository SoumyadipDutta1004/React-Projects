import { useState } from "react";
import Button from "./Button"
import DiceSelector from "./DiceSelector"
import GameScore from "./GameScore"
import GameRules from "./GameRules";




function PlayGame() {

  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(false)
  const [message, setMessage] = useState("Click on Dice to roll")
  const [canPlay, setCanPlay] = useState(true);

  const randomNum = () => {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(diceNum);
    return diceNum;
  }

  const rollDice = () => {
    setSelectedNumber(undefined);
    if (!canPlay) return;
    setMessage("Click on Dice to roll");

    if (selectedNumber === undefined) {
      setMessage("Please select a number before rolling the dice!");
      return
    }

    const randomNumber = randomNum();

    if (randomNumber === selectedNumber) {
      setScore(p => p + randomNumber);
    }
    else {

      setScore(p => p - 2)
      if (score - 2 <= -20) {
        setMessage("You lost the game!");
        setCanPlay(false);
      }
    }
  }

  const resetGame = () => {
    setCurrentDice(1);
    setScore(0);
    setCanPlay(true);
    setMessage("Click on Dice to roll");
  }

  const showRules = () => {
    setRules(!rules);
  }

  return (
    <>
      <header className="flex justify-between items-center max-w-[80dvw] mx-auto">
        <GameScore score={score} />
        <DiceSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </header>

      <main className="flex flex-col justify-center items-center gap-4">
        <div className="image cursor-pointer" onClick={rollDice}>
          <img src={`./dice2/${currentDice}.png`} alt="" width={250} height={250} />
        </div>
        <div className="text-2xl">{currentDice}</div>
        <h2 className="font-[Iceland] font-bold text-3xl">{message}</h2>
        <Button onclick={resetGame} isOutline={true} btnText="Reset Game" />
        <Button onclick={showRules} btnText="Show Rules" />
      </main>

      <GameRules isRules={rules} />
    </>
  )
}

export default PlayGame