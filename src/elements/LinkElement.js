import ElementColWrapper from './ElementColWrapper'

const LinkElement = (element) => {
  return (
    <ElementColWrapper element={element}>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href='http://www.com' target='_blank' rel='noopener noreferrer'>
          {element.content}
        </a>
      </div>
    </ElementColWrapper>
  )
}

export default LinkElement