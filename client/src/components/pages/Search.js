import React, { Component } from "react";
import API from "../utlis/API";
import Form from "../Form";
import ResultList from "../ResultList";



class GoogleBooks extends Component {
state = {
 books: [],
 searchTerm: " ",
 bookdata: {
   title: ""
 }
};

componentDidMount() {
  this.googleBooks("");
}



googleBooks = (query) => {
  API.googleSearch(query)
    .then(res => {
      console.log("load books");
      console.log(res.data)
      this.setState({ 
          books: res.data, 
          // title: res.data[0].volumeInfo.title, 
          // author: res.data[0].volumeInfo.authors[0], 
          // description: res.data[0].volumeInfo.description
      })
      console.log(this.state)
    }
    )
    .catch(err => console.log(err));
  
};



handleInputChange = event => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]: value
  });
  console.log(this.state.searchTerm)
};

handleFormSubmit = event => {
  event.preventDefault();
    this.googleBooks(this.state.searchTerm);
}




// handleInputChange = event => {
//   // const name = event.target.name;
//   const value = event.target.value;

//   const newState = {...this.state}

//   newState.searchTerm = value
// console.log(newState)
//   this.setState(newState)
//  console.log(this.state)
// };

// handleFormSubmit = event => {
//   event.preventDefault();
//     this.googleBooks(this.state.searchTerm);

// };

handleSaveSubmit = event => {
  event.preventDefault();
  const bookDataId = event.target.id
  const newBook = this.googleBooks(bookDataId)
  console.log(newBook);


  console.log("clicked")


};
render() {
  return (
    <div>This is where you google books
   
  
<Form 
searchTerm = {this.state.searchTerm}
handleFormSubmit={this.handleFormSubmit}
handleInputChange={this.handleInputChange}
/>


<br />
<br />

<ResultList results={this.state.books}  handleSaveSubmit={this.handleSaveSubmit}/>


    </div>
  );


}
 
};
export default GoogleBooks;


