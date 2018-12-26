import React, { Component } from "react";
import API from "../utlis/API";



class GoogleBooks extends Component {
state = {
 books: [],
 searchTerm: "bluest eye"
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
      //     title: "", 
      //     author: "", 
      //     description: "" 
      })
    }
    )
    .catch(err => console.log(err));
    
};

render() {
  return (
    <div>This is where you goole books
    {console.log(this.state)}

    </div>
  );


}
 
};
export default GoogleBooks;


