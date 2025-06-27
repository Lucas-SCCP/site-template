import TextElement from '../elements/TextElement'
import ImageElement from '../elements/ImageElement'
import InputElement from '../elements/InputElement'
import IconElement from '../elements/IconElement'
import ButtonElement from '../elements/ButtonElement'
import FileElement from '../elements/FileElement'
import AlertElement from '../elements/AlertElement'
import LinkElement from '../elements/LinkElement'
import ElementType from '../constants/ElementType'

import constructorService from '../services/ConstructorService'

class ElementFactory {
  static create(element) {
    switch (element.element_type_id) {
      case ElementType.Text:
        return TextElement(element)
      case ElementType.Image:
        return ImageElement(element)
      case ElementType.Input:
        return InputElement(element)
      case ElementType.Icon:
        return IconElement(element)
      case ElementType.Button:
        return ButtonElement(element)
      case ElementType.File:
        return FileElement(element)
      case ElementType.Alert:
        return AlertElement(element)
      case ElementType.Link:
        return LinkElement(element)
      case ElementType.Line:
        return constructorService.createLine(element.content)
      default:
        throw new Error('Invalid element type: ' + element.element_type_id)
    }
  }
}

export default ElementFactory