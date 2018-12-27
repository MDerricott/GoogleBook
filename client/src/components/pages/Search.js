import React, { Component } from "react";
import API from "../utlis/API";
import Form from "../Form";
import ResultList from "../ResultList";
import Grid from '@material-ui/core/Grid';
import Wrapper from '../Wrapper';




class GoogleBooks extends Component {
state = {
 books: [],
 searchTerm: " ",
 bookdata: {
   title: "",
   author: "",
   description: "",
   image: "",
   link: "",
   buttonState: "",
 },
 buttonState: false
};

componentDidMount() {
  this.googleBooks("");
}



googleBooks = (query) => {
  API.googleSearch(query)
    .then(res => {
 
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

googleABook = (query) => {
  API.googleSearch(query)
    .then(res => {
     

      this.setState({bookdata: {
        title: res.data[0].volumeInfo.title,
        author: res.data[0].volumeInfo.authors[0],
        description: res.data[0].volumeInfo.description,
        image: res.data[0].volumeInfo.imageLinks.thumbnail,
        link: res.data[0].volumeInfo.previewLink,
        buttonState: ""

      }})
      

      API.saveBook(this.state.bookdata)
      .then(res => {
        console.log(res.data)
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

disabled = (event) => {
  event.target.parentNode.parentNode.parentNode.setAttribute("disabled",true)
}
  // this.setState({
  //   [name]: value
  // });

  // console.log(event.target.parentNode.parentNode.parentNode.setAttribute("disabled", "disabled"))


handleSaveSubmit = event => {
  event.preventDefault();
  const bookDataId = event.target.id;

  this.disabled(event)
  
  this.googleABook(bookDataId)
 


};
render() {
  return (

    <Wrapper>
  
   
  
<Form 
searchTerm = {this.state.searchTerm}
handleFormSubmit={this.handleFormSubmit}
handleInputChange={this.handleInputChange}
/>


<br />
<br />
<Grid>
<ResultList results={this.state.books}  handleSaveSubmit={this.handleSaveSubmit} />
</Grid>

    
    </Wrapper>
  );


}
 
};
export default GoogleBooks;


