import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 

export const Footer = () => {
  return (
    <footer className="text-white py-4" style={{backgroundColor: "rgb(20, 19, 19)"}}>
      <Container style={{marginTop:"2rem"}}>
        <Row className="text-center">
          <Col>
            <p className="mb-0">Made by Sona Arakelova 

                <br></br>
                ©  All Rights Reserved</p>
            <p>
              <a href="mailto:sona@example.com" className="text-white text-decoration-none">
                📧 arakelovasona@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+1234567890" className="text-white text-decoration-none">
                📞 +(374) 98-20-89
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

