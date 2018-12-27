import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" className="appBar">
        <Toolbar>
          <IconButton className={classes.menuButton} aria-label="Menu">
                 <i className="material-icons" color="inherit">
                    public
                  </i>
          </IconButton>
          <Typography variant="h6" className={classes.grow} color="inherit">
            Google Book React Search
          </Typography>
          <Button href="/" color="inherit" >Search for Books</Button> 
           <Button href="/myBooks" color="inherit" >Saved Books</Button> 
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);