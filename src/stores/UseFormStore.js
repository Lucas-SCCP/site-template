import { create } from 'zustand'
import InputValidateFactory from '../factories/InputValidateFactory'

const UseFormStore = create((set, get) => ({
  forms: {},
  elements: {},

  registerForm: (formId) =>
    set((state) => ({
      forms: {
        ...state.forms,
        [formId]: state.forms[formId] || { elements: [] },
      },
    })),

  registerElement: (elementId, formId = null, initialState = {}) =>
    set((state) => {
      if (state.elements[elementId]) return {}

      const newElements = {
        ...state.elements,
        [elementId]: {
          id: elementId,
          name: null,
          type: null,
          formId,
          value: null,
          loading: false,
          hidden: false,
          error: false,
          errorMessage: null,
          validationType: null,
          ...initialState,
        },
      }

      let newForms = { ...state.forms }

      if (formId) {
        const existingForm = state.forms[formId] || { elements: [] }

        const alreadyIncluded = existingForm.elements.includes(elementId)
        const updateElements = alreadyIncluded
          ? existingForm.elements
          : [...existingForm.elements, elementId]

        newForms[formId] = {
          ...existingForm,
          elements: updateElements,
        }
      }

      return {
        elements: newElements,
        forms: newForms,
      }
    }),

  validateFormData: (type, elementId, value) => {
    const validation = InputValidateFactory.factory(type, value)

    get().setElementState(elementId, {
      error: !validation.success,
      errorMessage: validation.message,
    })
  },

  validateAllFields: (formId) => {
    const elements = get().getElementsByForm(formId)

    elements.forEach((element) => {
      if (element.validationType) {
        get().validateFormData(element.validationType, element.id, element.value)
      }
    })
  },

  setElementState: (elementId, newState) =>
    set((state) => ({
      elements: {
        ...state.elements,
        [elementId]: {
          ...state.elements[elementId],
          ...newState,
        },
      },
    })),

  getElementsByForm: (formId) =>
    get().forms[formId]?.elements.map((id) => get().elements[id]) || [],

  showElement: (id) => get().setElementState(id, { hidden: false }),
  hideElement: (id) => get().setElementState(id, { hidden: true }),
  setLoading: (id, loading) => get().setElementState(id, { loading }),
}))

export default UseFormStore
