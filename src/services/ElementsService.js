import React from 'react';
import { Col } from 'react-bootstrap'
import ElementFactory from '../elements/ElementFactory'

export const createElement = (element) => {
  return (
    <Col key={Math.random()} xs={12} md={12} lg={element.size}>
      {ElementFactory.create(element.type, element)}
    </Col>
  )
}

export const createLine = (elements) => {
  return elements.map((element) => {
    return (
      <Col key={Math.random()} xs={12} md={12} lg={element.size}>
        {ElementFactory.create(element.type, element)}
      </Col>
    )
  })
}