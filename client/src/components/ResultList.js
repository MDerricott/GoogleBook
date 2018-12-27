import React from "react";
// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavButton from './FavButton'
// import Button from "./Button"
import Grid from '@material-ui/core/Grid';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  avatar: {
    margin: 10,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
};




function ResultList(props) {
  const { classes } = props;
  return (
   <div>
      {props.results.map(result => (
      <div key={result.id}>
      <Card className="cardresults"  key={result.id} id={result.id}>
      <Grid container justify="center" spacing={8}>
      <Grid item  sm={12} md={3} >
      <img src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} className="saved-image"/>
      </Grid>
      <Grid item sm={12} md={9}>
        <CardHeader
          avatar={
            <Avatar aria-label="Book" className={classes.avatar}>
             <i className="material-icons" color="action">
collections_bookmark
</i>
            </Avatar>
          }
          title={result.volumeInfo.title}
          subheader= {result.volumeInfo.authors} 

          action={
            <IconButton >
              <FavButton handleSaveSubmit={props.handleSaveSubmit} id={result.id} />
            </IconButton>
          }
        />


        <CardContent>
       
          <Typography component="p">
          
          {result.volumeInfo.description}
          </Typography>
        </CardContent>
        </Grid>
        {/* <CardActions > */}
         <Grid container>
            {/* <FavoriteIcon onClick={props.handleSaveSubmit} id={result.id} /> */}
            
       
            </Grid>
          {/* </CardActions> */}
          </Grid>
          </Card>
           <br>
           </br>
           </div>
          ))}
<br></br>
</div>

      );
    }

export default withStyles(styles) (ResultList);


      