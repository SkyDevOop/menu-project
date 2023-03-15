import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';

const CardList = ({ cards }) => {
  return (
    <Row className="py-4 mt-2 justify-content-center">
      <Zoom>
        {cards.length ? (
          cards.map((ele) => {
            return (
              <Col key={ele.id} sm={12} className="my-2">
                <Card className="flex-sm-row">
                  <Image className="img-fluid" src={ele.img}></Image>
                  <Card.Body className="p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 className="title-list">{ele.title}</h3>
                      <span className="title-list">{ele.price}</span>
                    </div>
                    <p className="item-description mb-0 mt-2">
                      {ele.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h1>Not found</h1>
        )}
      </Zoom>
    </Row>
  );
};

export default CardList;
