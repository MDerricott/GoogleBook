import React, { Component } from "react";
import API from "../utlis/API";
import SavedList from "../SavedResults";
import Wrapper from '../Wrapper';
import Grid from '@material-ui/core/Grid';

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


handleDelete = (event) => {
  event.preventDefault();
  const bookDataId = event.target.id;
  console.log(bookDataId)
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
      <Wrapper>
   <Grid container style={{height: "100px"}}  justify="center"><h1>Favorited Books</h1></Grid>


        
       <div id="booklist">
          <SavedList results={this.state.books} handleDelete={this.handleDelete}/>
       
        </div>
       
       
    </Wrapper>
    );
    }
};

export default Books;
