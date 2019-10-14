import React from "react";
import Gallery from "./Gallery";

const DEFAULT_ITEMS = [
  {
    picture: "welcome-keep-calm.jpg",
    description: "This picture is one among...",
    id: -1
  },
  {
    picture: "",
    description: "",
    id: -2
  }
];

class GalleryContainer extends React.Component {
  constructor() {
    super();
    //Items sont les éléments affichés dans la liste
    //formItem est le formulaire en bas de page
    this.state = {
      items: [],
      formItem: {
        picture: "",
        description: "",
        id: ""
      },
      nextId: 0
    };

    this.setNewItemText = this.setNewItemText.bind(this);
    this.setNewItemPicture = this.setNewItemPicture.bind(this);
    this.saveNewItem = this.saveNewItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  render() {
    return (
      <Gallery
        items={this.state.items}
        formItem={this.state.formItem}
        setNewItemText={this.setNewItemText}
        setNewItemPicture={this.setNewItemPicture}
        saveNewItem={this.saveNewItem}
        removeItem={this.removeItem}
        updateItem={this.updateItem}
      />
    );
  }

  async componentDidMount() {
    try {
      const items = await this.loadItems();
      this.setState({
        items: items
      });
    } catch (err) {
      console.log("Error in componentDidMount:", err);
    }
  }

  loadItems() {
    return new Promise((resolve, reject) => {
      resolve(DEFAULT_ITEMS);
    });
  }
  setNewItemText(newValue) {
    console.log("GalleryContainer::setNewItemText", newValue);

    const { formItem } = this.state;
    
    const newFormItem = {
      ...formItem,
      description: newValue
    }
    this.setState({
      formItem: newFormItem
    });
  }
  //To be completed (arguments and function body)
  setNewItemPicture(newPicture) {
    const { formItem } = this.state;

    const newFormItem = {
      ...formItem,
      picture: newPicture
    }

    this.setState({
      formItem: newFormItem
    });


  }
  saveNewItem() {
    const { items } = this.state;
    //on n'a pas besoin de params puisque on a déjà l'info dans l'état
    this.nextId();
    const newItem = {picture:this.state.formItem.picture, description:this.state.formItem.description, id:this.state.nextId};
    const newItems = items.concat(newItem)
    console.log("The new item with id : ", newItem);
    this.setState({
      items: newItems
    });
  }
  removeItem(item) {
    console.log("Item recu :", item);
    console.log("Picture item: ", item.picture);
    const { items } = this.state;
    console.log("Items : ", items);
    
    
    const newItems = items.filter(function(e){
      //return (e.description !== item.description || e.picture !== item.picture);
      return e.id !== item.id;
    });
    this.setState({
      items: newItems
    })

  }
  //Returns the next item for an item and increments it
  nextId(){
    const {nextId} = this.state;
    console.log("Current ID", nextId);
    this.setState({
      nextId: nextId+1
    });
    return nextId;
  }


  updateItem() {
    //il faut trouver la solution pour permettre de changer l'item !
    
  }
}

export default GalleryContainer;
