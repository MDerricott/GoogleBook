import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utlis/API";
import SavedList from "../SavedResults";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    
    API.getBooks()
      .then(res => {
        console.log("load books");
        console.log(res.data)
        this.setState({ 
            books: res.data, 
           
        })
      }
      )
      .catch(err => console.log(err));
      console.log(this.state)
  };


removeElement = (elementId) => {
  const element = document.getElementById(elementId);
  element.parentNode.removeChild(element)
}


//   function removeElement(elementId) {
//     // Removes an element from the document
//     var element = document.getElementById(elementId);
//     element.parentNode.removeChild(element);
// }

handleDelete = (event) => {
  event.preventDefault();
  const bookDataId = event.target.id;
  this.delete(bookDataId)
  
 

  console.log("clicked")
}

delete = (id) => {
  API.deleteBook(id)
  .then(res => {
    console.log(res.data)
    this.loadBooks()
  })
  .catch(err => {
    console.log(err)
  })
  
}

  render() {
    return (
        <div> 
        Books
          {console.log(this.state)}

       <div id="booklist">
          <SavedList results={this.state.books} handleDelete={this.handleDelete}/>
       
        </div>
        </div>
       
//     
    );
    }
};

export default Books;
