import React, { useState } from 'react'
import UserOutput from './UserOutput'

function UserInput() {
  const [note, setNote] = useState('')

  function handleUserInput(event) {
    setNote(event.target.value)
<<<<<<< HEAD
=======
    console.log('currentState:', note)
>>>>>>> dd68c256f0c1c2021fe3a9926747f04c1f5d77de
  }

  return (
    <>
      <UserOutput data={note} />
      <form>
        <input
          type="text"
          name="UserInput"
          onChange={handleUserInput}
          // value={form.input}
        />
      </form>
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
