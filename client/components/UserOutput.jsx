import React from 'react'

function UserOutput(props) {
  const unsplitNote = props.data
  const splitNote = unsplitNote.split('')

  console.log('This is the split note array:', splitNote)

  return (
    <div className="output_container">
      <p>{props.data}</p>
      <p style= {font: 'blah', }></p>
    </div>
  )
}

export default UserOutput


