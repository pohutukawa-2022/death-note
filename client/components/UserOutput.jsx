import React from 'react'

function UserOutput(props) {
  console.log(props)

  // spilt method of props

  return (
    <div className="output_container">
      <p>{props.data}</p>
    </div>
  )
}

export default UserOutput
