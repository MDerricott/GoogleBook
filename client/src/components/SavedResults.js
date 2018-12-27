import React from "react";
import DeleteButton from "./DeleteButton"
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

// import Button from "./Button"
import Grid from '@material-ui/core/Grid';


// import Button from "./Button"







function ResultList(props) {




  return (
      <div>
      {props.results.map(result => (
           <div key={result._id}>
     <Card className="cardresults"  key={result.id} id={result._id}>
     <Grid container justify="center" spacing={8}>
                 <Grid item xs={2}  >     
                    <img src={result.image} alt={result.title} className="saved-image"/>
                </Grid>
            <Grid item xs={10}>
            <CardHeader
                    avatar={
                     <Avatar aria-label="Saved">
                         S
                    </Avatar>
                    }
                title={ <a href={result.link}>{result.title}</a>}
                subheader= {result.author} 

            action={
                <IconButton >
                <DeleteButton handleDelete={props.handleDelete} id={result._id} />
                </IconButton>
                }/>

        <CardContent>
             <Typography component="p">
                {result.description}
            </Typography>
        </CardContent>
        </Grid>
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
export default ResultList;



