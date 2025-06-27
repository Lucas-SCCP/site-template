import TextComponent from '../components/TextComponent'
import CarouselComponent from '../components/CarouselComponent'
import ListComponent from '../components/ListComponent'
import FormComponent from '../components/FormComponent'
import ComponentType from '../constants/ComponentType'

class ComponentFactory {
  static create(component) {
    switch (component.component_type_id) {
      case ComponentType.Text:
        return TextComponent(component)
      case ComponentType.List:
        return ListComponent(component)
      case ComponentType.Carousel:
        return CarouselComponent(component)
      case ComponentType.Form:
        return FormComponent(component)
      default:
        throw new Error('Invalid component type: ' + component.component_type_id)
    }
  }
}

export default ComponentFactory