import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import ReactHtml from 'raw-html-react'

const Location = ({ location }) => {
  // Unwrap the location object.
  const { title, image, description } = location

  return (
    <div className='location'>
      <Row className='top scroll-offset-class'>
        <Container className='my-md-5'>
          <Row>
            <Col xs={12} md={7} className='my-5'>
              <h1>{title}</h1>
            </Col>
            <Col xs={12} md={5} className='mb-3'>
              {image && (
                <img
                  className='img-fluid'
                  height={image.meta.height}
                  width={image.meta.width}
                  src={image.url}
                  alt={image.meta.alt || ''}
                />
              )}
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className='py-3 bg-light'>
        <Container>
          <Row>
            <Col xs={12} className='d-flex mt-3'>
              <ReactHtml html={description} />
            </Col>
          </Row>
        </Container>
      </Row>

      <pre>{JSON.stringify(location, null, 2)}</pre>
    </div>
  )
}

Location.propTypes = {
  location: PropTypes.object
}

export default Location