import React from "react";
import "./button.scss";
import { Button, Row } from 'react-bootstrap';


const ButtonUser = (props) => {
  const {text, className} = props;
  return (
    <div className="button">
      <Row className="mx-0">
      <Button type="button" className={className}>{text}</Button>
      </Row>
    </div>
  );
};

export default ButtonUser;