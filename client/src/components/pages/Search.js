import React, { Component } from "react";
import API from "../utlis/API";
import { timingSafeEqual } from "crypto";



class GoogleBooks extends Component {
state = {
 books: [],
 searchTerm: "black"
};

componentDidMount() {
  this.googleBooks();
}

googleBooks = () => {
  API.googleSearch(this.state.searchTerm)
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

render() {
  return (
    <div>This is where you goole books
    {console.log(this.state)}
    <br/>
   Title: {this.state.title}
   <br/>
   Author: {this.state.author}
   <br/>
   Description: {this.state.description}

    </div>
  );


}
 
};
export default GoogleBooks;


