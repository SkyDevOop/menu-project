import React from "react";
import { Col, Row } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import Swing from 'react-reveal/Swing';
const Header = ({ filterCategory, finish }) => {
  const callFunFilter = (cat) => {
    filterCategory(cat);
  };
  return (
    <Row className="text-center justify-content-center">
      <Col sm={12}>
        <h2 className="title my-3 m-auto">Food Menu</h2>
      </Col>
      <Col sm={12}>
        <div className="d-flex flex-wrap justify-content-center my-2">
          <Swing>
            {finish.length
              ? finish[0].map((ele) => {
                  return (
                    <button
                      key={uuid().slice(0, 8)}
                      onClick={() => callFunFilter(ele)}
                      className="my-btn"
                    >
                      {ele}
                    </button>
                  );
                })
              : null}
          </Swing>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
