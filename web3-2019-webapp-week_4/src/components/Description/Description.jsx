import React from "react";
import { Col } from "react-bootstrap";
import withNull from "hoc/withNull";
import NullDescription from "./NullDescription";
import ContentEditable from 'react-contenteditable';

function Description({
    description,
    handleChange
}) { 
    
  
    //mx-2 mx-md-auto : center the description from medium viewport (even though the row align content from start)
    //m-2 my-md-auto : add margin for small viewport, else center the      
    return(

     <Col md={6} className="my-2 mx-2 mx-md-auto border border-secondary rounded-lg">
        <ContentEditable
                html={description}
                disabled={false} 
                onChange={handleChange}
        />
     </Col>  

    )
}

const improve = withNull("description", NullDescription);

export default improve(Description);
 