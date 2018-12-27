import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/pages/Saved";
import Search from "./components/pages/Search"
import NavBar from "./components/NavBar";
import Grid from '@material-ui/core/Grid';




class App extends Component {
  render() {
    return (
      <Grid container>
      
          <Grid container style={{height: "100px"}}>
            <NavBar />
          </Grid>
          <br/>
          <br/>

        <Grid container >

        <Router>
 
     <Switch>
       <Route exact path="/" component={Search} />
       {/* <Route exact path="/books" component={Books} /> */}
       <Route exact path="/myBooks" component={Books} />
       {/* <Route component={NoMatch} /> */} */}
     </Switch>
 </Router>

        </Grid>

    </Grid> 
    );
  }
}

export default App;
