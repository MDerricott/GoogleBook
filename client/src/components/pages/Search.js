import React, { Component } from "react";
import API from "../utlis/API";

import ResultList from "../ResultList";

import Wrapper from '../Wrapper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import SearchButton from '../SearchButton';
import IconButton from '@material-ui/core/IconButton';




class GoogleBooks extends Component {


   constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchTerm: " ",
      bookdata: {
        title: "",
        author: "",
        description: "",
        image: "",
        link: "",
      },
     };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);}


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
    .catch(err => console.error(err));
  
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
    .catch(err => console.error(err));
  
};


handleInputChange = event => {
  const name = event.target.name;
  const value = event.target.value;
  console.log(value)
  this.setState({
    [name]: value
  });

};

handleFormSubmit = event => {

  event.preventDefault();
  console.log("clicked")
    this.googleBooks(this.state.searchTerm);
    
}

// disabled = (event) => {
//   event.target.parentNode.parentNode.parentNode.setAttribute("color","disabled")
// }
  // this.setState({
  //   [name]: value
  // });

  // console.log(event.target.parentNode.parentNode.parentNode.setAttribute("disabled", "disabled"))


handleSaveSubmit = event => {
  event.preventDefault();
  console.log("clicked")
  const bookDataId = event.target.id;
  // console.log(event.target.childNode)
  // console.log(bookDataId)
  event.target.setAttribute("fill","red")

 
  
  this.googleABook(bookDataId)
 


};
render() {
  return (

    <Wrapper>
  
  <Grid container justify="center">
    <FormControl>
        <InputLabel htmlFor="input-with-icon-adornment">Search for a Book</InputLabel>
        
              <Input
            
              onChange={this.handleInputChange}
              value={this.state.searchTerm}
              name="searchTerm"
              type="text"
              // className="form-control"
              id="search"
              // className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              endAdornment={
                <InputAdornment position="end">
                   <IconButton onClick={this.handleFormSubmit}>
                      <SearchButton />
                  </IconButton>
                </InputAdornment>
              }
            />

      </FormControl>
      </Grid>
    


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


