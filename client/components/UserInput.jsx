import React, { useState } from 'react'
import UserOutput from './UserOutput'

function UserInput() {
  //const [form, setForm] = useState()

  return (
    <>
      <h2>USER INPUT</h2>
      <form>
        <input
          placeholder="Type your message here"
          type="text"
          name="UserInput"
          //onChange={handleUserInput}
          //value={form.input}
        />
      </form>

      <UserOutput />
    </>
  )
}

export default UserInput
