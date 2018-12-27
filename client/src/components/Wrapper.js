import React from "react";
import Grid from '@material-ui/core/Grid';

function Wrapper(props) {
  return (
  <Grid container justify="center">
  <div className="wrapper" style={{width: '60%'}} >{props.children}</div>
  </Grid>
  )

}

export default Wrapper;
