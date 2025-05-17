const ImageElement = (data) => {
  return (
    <img
      src={data.content}
      alt={data.title}
      style={{
        width: '100%',
        height: 'auto',
        objectFit: 'cover'
      }}
    />
  )
}

export default ImageElement