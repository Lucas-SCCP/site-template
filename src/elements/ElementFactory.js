import TextElement from '../elements/TextElement'
import CarouselElement from './CarouselElement'
import ImageElement from './ImageElement'
import { createLine } from '../services/ElementsService'

class ElementFactory {
  static create(type, data) {
    switch (type) {
      case 'text':
        return TextElement(data);
      case 'carousel':
        return CarouselElement(data);
      case 'image':
        return ImageElement(data);
      case 'line':
        return createLine(data.content);
      default:
        throw new Error('Invalid element type');
    }
  }
}

export default ElementFactory