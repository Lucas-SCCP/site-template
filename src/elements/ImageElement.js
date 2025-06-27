import ElementColWrapper from './ElementColWrapper'

const ImageElement = (element) => {
  return (
    <ElementColWrapper element={element}>
      <img
        src={element.content}
        alt={element.title}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </ElementColWrapper>
  )
}

export default ImageElement
