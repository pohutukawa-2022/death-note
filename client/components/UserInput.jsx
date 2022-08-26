import React, { useState } from 'react'
import UserOutput from './UserOutput'

function UserInput() {
  const [note, setNote] = useState('')

  function handleUserInput(event) {
    setNote(event.target.value)
  }

  return (
    <>
      <UserOutput data={note} />
      <h4>enter your threat below</h4>
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
