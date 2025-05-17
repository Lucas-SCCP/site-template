const TextElement = (data) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: data.content }} />
  )
}

export default TextElement