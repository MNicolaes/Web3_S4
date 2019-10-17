import React,{useState} from "react";
import { Col } from "react-bootstrap";
import ContentEditable from 'react-contenteditable';

function NullDescription() { 

    const [descriptionHTML, setDescriptionHTML] = useState("No description yet");
    //console.log("Description : ", descriptionHTML);

    const handleChange = evt => {
        setDescriptionHTML(evt.target.value);
    }
    //mx-2 mx-md-auto : center the description from medium viewport (even though the row align content from start)
    //m-2 my-md-auto : add margin for small viewport, else center the      
    return (
        <Col md={6} className="my-2 mx-2 mx-md-auto border border-secondary rounded-lg">
            <ContentEditable
                    html={descriptionHTML}
                    disabled={false} 
                    onChange={handleChange}
            />
        </Col>  
    )
}


export default NullDescription;