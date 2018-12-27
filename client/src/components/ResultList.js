import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavButton from './FavButton'
import Grid from '@material-ui/core/Grid';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
          <Button size="small" color="primary" href={result.volumeInfo.previewLink}>
                    Preview the Book
                </Button>
     
          </Typography>
        </CardContent>
        </Grid>
         <Grid container>
            </Grid>
      
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


      