import React, { useState } from 'react'
import UserOutput from './UserOutput'

function UserInput() {
  const [form, setForm] = useState()

  

  return (
    <>
      <h1>USER INPUT</h1>
      <form>
        <input
          type="text"
          name="UserInput"
          onChange={handleUserInput}
          value={form.input}
        />
      </form>
    </>
  )
}

export default UserInput
