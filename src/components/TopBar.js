import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TopBar() {

  return(
    <div>
         <Row>
        <Col style={{
          backgroundColor: 'red',
        }}>
          Sample First Col
      </Col>
        <Col style={{
          backgroundColor: 'yellow',
        }}>
          Sample Second Col
      </Col>
        <Col style={{
          backgroundColor: 'green',
        }}>
          Sample Third Col
      </Col>
      </Row>
    </div>
  );
}