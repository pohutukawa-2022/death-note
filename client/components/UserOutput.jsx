import React from 'react'
import data from '../data'

function UserOutput(props) {
  const unsplitNote = props.data
  const splitNote = unsplitNote.split('')

  function getStyles(style) {
    const pickedStyle = data[style]
    const num = Math.floor(Math.random() * pickedStyle.length)

    return pickedStyle[num]
  }

  const arr = splitNote.map((letter, i) => {
    if (letter === ' ') {
      return ' '
    } else {
      return (
        <p
          key={i}
          style={{
            fontFamily: getStyles('font'),
            fontSize: getStyles('font_size'),
            color: getStyles('font_color'),
            backgroundColor: getStyles('background_color'),
            transform: getStyles('rotate'),
            textTransformation: getStyles('text_transformation'),
            textDecoration: getStyles('text_decoration'),
          }}
        >
          {letter}
        </p>
      )
    }
  })
  console.log(arr)

  return <div className="output_container"> {arr} </div>
}

export default UserOutput
