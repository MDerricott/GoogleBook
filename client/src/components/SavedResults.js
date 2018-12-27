import React from "react";
import DeleteButton from "./DeleteButton"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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
           <div key={result._id}>
     <Card className="cardresults"  key={result.id} id={result._id}>
     <Grid container justify="center" spacing={8}>
                 <Grid item sm={12} md={3}  >     
                    <img src={result.image} alt={result.title} className="saved-image"/>
                </Grid>
            <Grid item sm={12} md={9}>
            <CardHeader 
                     avatar={
                     <Avatar aria-label="Saved" className={classes.pinkAvatar}>
                        <i className="material-icons">
                            favorite_border
                        </i>
                    </Avatar>
                    }
                 
                title={<h2>{result.title}</h2>}
                subheader= {result.author} 
                

            action={
                <IconButton >
                <DeleteButton handleDelete={props.handleDelete} id={result._id} />
                </IconButton>
                }/>

        <CardContent>
             <Typography component="p">
                {result.description} 
                <br>
                </br>
                <Button size="small" color="primary" href={result.link}>
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



