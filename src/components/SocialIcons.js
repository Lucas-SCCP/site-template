import { Row, Col } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLink } from 'react-icons/fa'

function SocialIcons() {
  const elements = [
    {
      url: 'https://www.facebook.com/',
      icon: <FaFacebookF />,
      description: 'Logo do Facebook',
    },
    {
      url: 'https://www.instagram.com/',
      icon: <FaInstagram />,
      description: 'Logo do Instagram',
    },
    {
      url: 'https://linktr.ee/',
      icon: <FaLink />,
      description: 'Logo do Linktree',
    },
  ]

  return (
    <Row>
      {elements.map((element, index) => (
        <Col key={element.id} className="text-center social-icons texto-primaria">
          <a href={element.url} target="_blank" rel="noreferrer" aria-label={elements.description}>
            {element.icon}
          </a>
        </Col>
      ))}
    </Row>
  )
}

export default SocialIcons
