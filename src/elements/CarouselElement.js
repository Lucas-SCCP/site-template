import { Row, Col, Carousel } from 'react-bootstrap'

const CarouselElement = (data) => {
  return (
    <Row>
      <Col>
        <Carousel indicators={false} className='slider'>
          {data.content.map((element, index) => (
            <Carousel.Item key={index}>
              <img
                src={element.content}
                alt={element.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        </Col>
      </Row>
  )
}

export default CarouselElement