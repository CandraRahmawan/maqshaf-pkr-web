import { makeStyles } from "@material-ui/core/styles";
import { string, number } from "prop-types";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },

    "& .MuiTypography-h5": {
      width: 200,
      height: 60,
      fontSize: 20,
      [theme.breakpoints.down("xs")]: {
        width: "auto",
        height: "auto",
      },
    },

    "& .MuiTypography-h6": {
      fontWeight: 400,
    },
  },

  media: {
    height: 140,
    backgroundSize: "contain",
    margin: 16,
  },

  content_background: {
    backgroundColor: "#f5f5f5",
  },
}));

const CardComponent = (props) => {
  const { image, title, price } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root} key={title}>
      <CardActionArea className={classes.content_background}>
        <CardMedia className={classes.media} image={image} title={title} />
      </CardActionArea>
      <CardContent>
        <Typography color="textSecondary" variant="p">
          minuman
        </Typography>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography color="textSecondary" variant="h6">
          {`Rp. ${price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Beli
        </Button>
      </CardActions>
    </Card>
  );
};

CardComponent.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  price: number.isRequired,
};

export default CardComponent;
