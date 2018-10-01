import React from "react";
import { Container, Row, Col } from "reactstrap";
export default props => {
  return (
    <Row className="align-items-center m-1 p-1" style={styles.fileItem}>
      <Col sm="4" className="text-center">
        <img src="https://via.placeholder.com/32x32" alt="" />
      </Col>
      <Col sm="8">
        <div>{props.name}</div>
        <span>{props.size}</span>
      </Col>
    </Row>
  );
};

const styles = {
  fileItem: {
    borderRadius: 3,
    border: "1px solid #ddd"
  }
};
