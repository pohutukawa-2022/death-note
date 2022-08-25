import React from 'react'
import UserOutput from './UserOutput'
function UserInput() {
  return (
    <>
      <h1>USER INPUT</h1>
      <form>
        <input
          placeholder="this is the input"
          type="text"
          name="UserInput"
          // onChange={handleUserInput}
          // value={form.input}
        />
      </form>

      <UserOutput />
    </>
  )
}

export default UserInput
