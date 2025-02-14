import { useState } from "react";
import PlayGame from "./components/PlayGame";
import StartGame from "./components/StartGame"


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted(!isGameStarted);
  }

  return (
    <>
      {isGameStarted ? <PlayGame/> : <StartGame toggleGame={toggleGamePlay}/>}
    </>
  )
}

export default App
