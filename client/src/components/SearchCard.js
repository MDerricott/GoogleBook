

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

function SearchCard(props) {

// class RecipeReviewCard extends React.Component {
  // state = { expanded: false };

  // handleExpandClick = () => {
  //   this.setState(state => ({ expanded: !state.expanded }));
  // };

  
    // const { classes } = this.props;

    return (
      <div>
      {/* {props.results.map(result => ( */}
      <Card className="class">
        <CardHeader
          avatar={
            <Avatar aria-label="Book">
              B
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="title"
          subheader="September 14, 2016"
        />
        <CardMedia
          
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
           {}
          </Typography>
        </CardContent>
        <CardActions >
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          
          
        </CardActions>
        
          
      </Card>
      ))}
      </div>
    );
  
}

// SearchCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SearchCard);