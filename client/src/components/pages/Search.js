import React, { Component } from "react";
import API from "../utlis/API";
import Form from "../Form";
import ResultList from "../ResultList";



class GoogleBooks extends Component {
state = {
 books: [],
 searchTerm: ""
};

componentDidMount() {
  this.googleBooks("bluest eye");
}

googleBooks = (query) => {
  API.googleSearch(query)
    .then(res => {
      console.log("load books");
      console.log(res.data)
      this.setState({ 
          books: res.data, 
          title: res.data[0].volumeInfo.title, 
          author: res.data[0].volumeInfo.authors[0], 
          description: res.data[0].volumeInfo.description
      })
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
  
};

handleFormSubmit = event => {
  event.preventDefault();
    this.googleBooks(this.state.searchTerm);
}
render() {
  return (
    <div>This is where you google books
   
    <br/>
   Title: {this.state.title}
   <br/>
   Author: {this.state.author}
   <br/>
   Description: {this.state.description}
<br />
<Form 
searchTerm = {this.state.searchTerm}
handleFormSubmit={this.handleFormSubmit}
handleInputChange={this.handleInputChange}
/>

<ResultList results={this.state.books}v/>


    </div>
  );


}
 
};
export default GoogleBooks;


