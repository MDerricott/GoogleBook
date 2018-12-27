import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/pages/Saved";
import Nav from "./components/Nav";
import Search from "./components/pages/Search"

class App extends Component {
  render() {
    return (
<div>
<Nav />
<Router>
     
        
        <Switch>
          <Route exact path="/" component={Books} />
          {/* <Route exact path="/books" component={Books} /> */}
          <Route exact path="/search" component={Search} />
          {/* <Route component={NoMatch} /> */} */}
        </Switch>
    
    </Router>
    </div>

  


      



      // <div className="App">
      // Hello World
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
