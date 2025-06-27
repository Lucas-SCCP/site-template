import { useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import ElementColWrapper from './ElementColWrapper'
import UseFormStore from '../stores/UseFormStore'

const AlertElement = (element) => {
  const properties = JSON.parse(element.properties)
  const style = properties.style

  const hidden = UseFormStore((state) => state.elements[element.id]?.hidden)

  const registerElement = UseFormStore((state) => state.registerElement)

  useEffect(() => {
    registerElement(element.id, element.component_id, {
      type: 'alert',
      hidden: properties.visibilityAfter,
    })
  }, [element.id, element.component_id, properties, registerElement])

  if (hidden) return null

  return (
    <ElementColWrapper element={element}>
      <Alert hidden={hidden} variant={properties.variant} className="text-center">
        <Alert.Heading>{properties.title}</Alert.Heading>
        <p className="mb-0">{properties.message}</p>
      </Alert>
    </ElementColWrapper>
  )
}

export default AlertElement
