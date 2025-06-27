import { useEffect } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import ElementColWrapper from './ElementColWrapper'
import UseFormStore from '../stores/UseFormStore'

import ButtonActionFactory from '../factories/ButtonActionFactory'

const ButtonElement = (element) => {
  const properties = JSON.parse(element.properties)
  const style = properties.style

  const hidden = UseFormStore(state => state.elements[element.id]?.hidden)
  const loading = UseFormStore(state => state.elements[element.id]?.loading)
  
  const showElement = UseFormStore(state => state.showElement)
  const hideElement = UseFormStore(state => state.hideElement)
  const registerElement = UseFormStore(state => state.registerElement)

  useEffect(() => {
    registerElement(element.id, element.component_id, {
      type: 'button',
      hidden: properties.visibilityAfter
    })
  }, [element.id, element.component_id, properties, registerElement])

  async function handleClick(event) {
    if (!properties.href) {
      event.preventDefault()

      UseFormStore.getState().validateAllFields(element.component_id)
      
      const formData = UseFormStore.getState().getElementsByForm(element.component_id)
      const hasErrors = formData.some(e => e.error)

      if (hasErrors) {
        return false
      }

      UseFormStore.getState().setElementState(element.id, { loading: true })

      if (properties.action) {
        await ButtonActionFactory.create(properties.action, formData)
      }

      setTimeout(() => {
        if (properties.hideButtonAfter) {
          hideElement(element.id)
        }

        if (properties.successMessageId) {
          showElement(properties.successMessageId)
        }

        if (properties.successActionId) {
          showElement(properties.successActionId)
        }

        UseFormStore.getState().setElementState(element.id, { loading: false })
      }, properties.loadingTime)
    }
  }

  if (hidden) return null

  return (
    <ElementColWrapper element={element}>
      <Button
        as={properties.href ? 'a' : 'button'}
        type={properties.type}
        variant={properties.variant}
        href={properties.href}
        target={properties.href ? '_blank' : undefined}
        rel={properties.href ? 'noopener noreferrer' : undefined}
        disabled={loading}
        onClick={handleClick}
        className='cor-primaria'
        style={{ width: '100%', marginBottom: '10px' }}
      >
        {
          loading ? (
            <>
              <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
              {' ' + properties.loadingMessage}
            </>
          ) : (
            properties.title
          )
        }
      </Button>
    </ElementColWrapper>
  )
}

export default ButtonElement