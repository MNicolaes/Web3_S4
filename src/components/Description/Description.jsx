import React from "react";
//import "./Description.css";
import { Col } from "react-bootstrap";

function Description({description}) { 
    //mx-2 mx-md-auto : center the description from medium viewport (even though the row align content from start)
    //m-2 my-md-auto : add margin for small viewport, else center the      
    return <Col md={7} className="my-2 mx-2 mx-md-auto border border-secondary rounded-lg">{description}</Col>  
}


export default Description;

  
 