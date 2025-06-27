import { useEffect } from 'react'
import { Form, Row } from 'react-bootstrap'

import UseFormStore from '../stores/UseFormStore'

import constructorService from '../services/ConstructorService'

const FormComponent = (component) => {
  const registerForm = UseFormStore((state) => state.registerForm)

  useEffect(() => {
    registerForm(component.id)
  }, [registerForm, component.id])

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      console.log('SUBMIT')
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
    }
  }

  return (
    <Form noValidate onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
      <Row className="form-contact">
        {Object.values(component.elements.content).map((content) =>
          constructorService.createElement(content)
        )}
      </Row>
    </Form>
  )
}

export default FormComponent
