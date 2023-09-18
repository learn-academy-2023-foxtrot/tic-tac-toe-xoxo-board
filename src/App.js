import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (selectedIndex) => {
    // alert(selectedIndex)
   
    if(squares[selectedIndex] === null) {
      squares[selectedIndex] = "❌"
      setSquares([...squares])
    }
    //   squares[selectedIndex]="❌"
    //   setSquares([...squares])
    // } else if("null" === selectedIndex) {
    //   squares[selectedIndex]="⭕️"
    //   setSquares([...squares])
    // } 
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} handleClick={handleClick} />
    </>
  )
}

export default App