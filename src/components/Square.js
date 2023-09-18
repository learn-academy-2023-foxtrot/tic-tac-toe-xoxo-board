import React from 'react'


const Square = ( {squares, handleClick} ) => {
  console.log("squares", squares)
  console.log("handleClick", handleClick)
  return (
    <>
      <div className="grid">
        {squares.map((value, index) => {
          return(
            <div 
            className="square"
            key={index}
            onClick={() => handleClick(index)}
           >
            {value}
            </div>
         )
        })}
        </div>
    </> 
    )
   }

export default Square
