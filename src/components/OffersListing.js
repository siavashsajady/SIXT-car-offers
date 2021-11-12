/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import OfferComponent from './OfferComponent';
import { setOffers } from '../redux/actions/offerActions';

const OfferListing = () => {
  const dispatch = useDispatch();

  const fetchOffers = async () => {
    await fetch('http://cdn.sixt.io/codingtask/offers.json')
      .then((response) => response.json())
      .then((response) => {
        const renderList = response.offers.map((offer) => ({
          id: offer.id,
          name: offer.description,
          prices: offer.prices.totalPrice,
          image: offer.splashImages,
        }));
        dispatch(setOffers(renderList));
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  useEffect(() => {
    fetchOffers();
  }, []);
  return (
    <>
      <h1>Car Offers</h1>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <OfferComponent />
        </Col>
      </Row>
    </>
  );
};

export default OfferListing;
