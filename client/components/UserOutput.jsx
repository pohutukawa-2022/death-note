import React from 'react'

function UserOutput(props) {
  const unsplitNote = props.data
  const splitNote = unsplitNote.split('')

  const newNote = splitNote.map((letter) => letter.toUpperCase())

  console.log('This is the split note array:', splitNote)
  console.log('This is the uppercase note array:', newNote)

  return (
    <div className="output_container">
      <p>{props.data}</p>
      <p>{newNote}</p>
    </div>
  )
}

export default UserOutput
