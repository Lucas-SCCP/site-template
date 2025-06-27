import DOMPurify from 'dompurify'
import ElementColWrapper from './ElementColWrapper'

const TextElement = (element) => {

  const properties = JSON.parse(element.properties)
  const style = properties.style

  return (
    <ElementColWrapper element={element}>
      <div 
        style={{
          display: style.display,
          color: style.color,
          height: style.height,
          alignItems: style.alignItems,
          textAlign: style.textAlign,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          marginTop: style.marginTop,
          marginLeft: style.marginLeft,
        }}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(properties.text) }} 
      />
    </ElementColWrapper>
  )
}

export default TextElement