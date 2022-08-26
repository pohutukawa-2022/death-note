import React, { useState } from 'react'
import UserOutput from './UserOutput'
let intermediaryArray = []

function UserInput() {
  const [note, setNote] = useState([])

  function handleUserInput(event) {
    const input = event.target.value

    intermediaryArray.push(input[input.length - 1])
    setNote(intermediaryArray)
  }

  return (
    <>
      <form>
        <input type="text" name="UserInput" onChange={handleUserInput} />
      </form>
      <ul>
        {note.map((letter) => {
          console.log(letter)
          return <UserOutput key={letter} data={letter} />
        })}
      </ul>
    </>
  )
}

export default UserInput

// function getStyle(style) {
//   let style2 = styles[style]
//   const num = Math.floor(Math.random() * style2.length)

//   return style2[num]
// }

// const splitNote = unsplitNote.split('')
