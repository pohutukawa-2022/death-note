import React from 'react'

function UserOutput(props) {
  console.log(props.data)
  const letter = props.data
  return (
    <div className="output_container">
      <p key={letter}>{letter}</p>
      {/* <ul>
        {note.map((letter) => {
          console.log(letter)
        })}
      </ul>
      <p>{props.data}</p> */}
    </div>
  )
}

export default UserOutput
