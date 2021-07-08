import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import styles from "./style";

const SearchView = ({ classes }) => {
  const [goods, setGoods] = useState([]);
  const { rootStyle, wrapperStyle, searchStyle } = classes;

  useEffect(() => {
    axios("/mastergood/all").then((resp) => setGoods(resp.data.data));
  }, []);

  console.log("goods", goods);

  return (
    <div className={rootStyle}>
      <div className={wrapperStyle}>
        <form oValidate autoComplete="off">
          <TextField
            className={searchStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="white" />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <div>
          {goods?.map((item) => (
            <div>
              <h3>{item.name}</h3>
              <img src={item.image} width="60" />
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SearchView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchView);
