
import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import SearchButton from './SearchButton';
import IconButton from '@material-ui/core/IconButton';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''};
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  

    handleInputChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleFormSubmit(event) {
      // googleBooks(this.state.searchTerm);
      event.preventDefault();
      console.log("clicked")
    }

  // handleInputChange (event) {
  //   this.setState({value: event.target.value});
  //   };
  
  // };
  
  // handleFormSubmit = event => {
  
  //   event.preventDefault();
  //   console.log("clicked")
  //     this.googleBooks(this.state.searchTerm);
  // }


  render(){
    return (
  
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
              defaultValue="Search for Books"
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
    )}

            }
export default Form;





// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }