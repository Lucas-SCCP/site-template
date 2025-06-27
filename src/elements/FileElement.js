import ElementColWrapper from './ElementColWrapper'
import DOMPurify from 'dompurify'

const FileElement = (element) => {
  return (
    <ElementColWrapper element={element}>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(element.content) }} />
    </ElementColWrapper>
  )
}

export default FileElement
