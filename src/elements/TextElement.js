import React from 'react'

const TextElement = (data) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: data.content }} />
  )
}

export default TextElement