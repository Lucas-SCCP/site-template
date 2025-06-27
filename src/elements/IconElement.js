import React, { Suspense } from 'react'
import ElementColWrapper from './ElementColWrapper'

const IconElement = (element) => {
  const properties = JSON.parse(element.properties)
  const style = properties.style

  const IconElement = React.lazy(() => 
    import(`react-icons/fa`).then((module) => {
      const Icon = module[properties.name]
      if (!Icon) {
        throw new Error(`Icon '${properties.name}' not found in pack`)
      }
      return { default: Icon }
    })
  )

  return (
    <ElementColWrapper element={element}>
      <Suspense fallback={null}>
        <IconElement size={20} className='texto-primaria' style={{ marginRight: '8px' }} />
      </Suspense>
    </ElementColWrapper>
  )
}

export default IconElement