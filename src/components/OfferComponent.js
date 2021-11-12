import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactImageFallback from 'react-image-fallback';
import { Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import offerComponent from './OfferComponent.css';

const OfferComponent = () => {
  const offers = useSelector((state) => state.allOffers.offers);
  const renderList = offers.map((offer) => {
    const { name, prices, image, id } = offer;
    return (
      <>
        <Row>
          <Col key={id} sm={12} md={6} lg={4} xl={3}>
            <Card id='card' className='my-3 p-3 rounded bg-light text-dark  '>
              <Link to={`/offer/${offer._id}`}>
                <ReactImageFallback
                  className='img img-fluid img-thumbnail rounded mx-auto d-block'
                  src={image?.[0]?.url}
                  id='img-1'
                  fallbackImage='https://www.sixt.de/socialMedia/sixt-preview-image.jpg'
                />
              </Link>

              <Card.Body>
                <Link to={`/offer/${offer._id}`}>
                  <Card.Title as='div'>
                    <h2>
                      <strong>{name}</strong>
                    </h2>
                  </Card.Title>
                </Link>
                <Card.Text as='h3'>$ {prices?.amount?.value}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  });
  return <>{renderList}</>;
};

export default OfferComponent;
