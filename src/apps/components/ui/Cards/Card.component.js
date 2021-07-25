import { makeStyles } from "@material-ui/core/styles";
import { string, number, func } from "prop-types";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { rupiahFormat } from "helpers/formattor.helper";

import { useStyles } from "./style";

const CardComponent = (props) => {
  const { image, title, price, currency, category, t } = props;
  const classes = useStyles();
  const isXsDevice = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  return (
    <Card className={classes.root} key={title}>
      <CardActionArea className={classes.content_background}>
        <CardMedia className={classes.media} image={image} title={title} />
      </CardActionArea>
      <CardContent>
        <Typography color="textSecondary" variant="p">
          {category}
        </Typography>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography color="textSecondary" variant="h6">
          {`${currency}. ${rupiahFormat(price)}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          {isXsDevice ? <AddShoppingCartIcon /> : t("search_product:addToCart")}
        </Button>
      </CardActions>
    </Card>
  );
};

CardComponent.propTypes = {
  t: func.isRequired,
  image: string.isRequired,
  title: string.isRequired,
  price: number.isRequired,
  currency: string.isRequired,
  category: string.isRequired,
};

export default CardComponent;
