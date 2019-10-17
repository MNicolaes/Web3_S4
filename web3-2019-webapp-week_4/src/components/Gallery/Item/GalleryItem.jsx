import React,{useState} from "react";
import { Row,Col,Button } from "react-bootstrap";
import Picture from "../../Picture/Picture";
import Description from "../../Description/Description";


function GalleryItem({
    picture,
    description,
    id,
    removeItem,
    updateItem
})  {

    const [descriptionHTML, setDescriptionHTML] = useState(description);

    const handleChange = evt => {
        console.log("Description : ", descriptionHTML);
        description = evt.target.value;
        console.log("Description pure : ", description);
        setDescriptionHTML(evt.target.value);
    }


    const deleteItem = (e) => {
        //console.log("Event : ", e);
        //console.log("picture :", {picture});
        removeItem({id})
    }

    const handlerUpdateItem = (e) =>{
        console.log("Item actual :", e)
        updateItem({picture, descriptionHTML, id})
    }
   

    return (

        <Row className="m-2 justify-content-start border border-dark rounded-lg">
            <Picture picture={picture} /> 
            <Description description={descriptionHTML} handleChange={handleChange}/>
            
            <Col className="col text-center">
                <Button
                id="save_item"
                variant="btn btn-outline-dark"
                className="m-2"
                onClick={handlerUpdateItem}           
                >
                Save
                </Button>

                <Button
                    id="delete_item"
                    variant="btn btn-outline-dark"
                    className="m-2"
                    onClick={deleteItem}                    
                >
                    Delete
                </Button>
          </Col>
        
         
        </Row>        
    )
  
}

export default GalleryItem;
