import { useState } from "react";
import { Button, DialogContent, DialogActions } from "@material-ui/core";
import QrReader from "react-qr-reader";
import { func, object } from "prop-types";
import { useDispatch } from "react-redux";
import { clearCart } from "redux/reducers/cartSelected.reducer";
import useGetUserByQrCodeHook from "hooks/useGetUserByQrCode.hook";

import useStyles from "./useStyle";

const IdentityDataDialogComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t, handleCloseModal, history } = props;
  const [resultCode, setResultCode] = useState();

  const { user, isLoading } = useGetUserByQrCodeHook(resultCode);

  const handleScan = (data) => {
    if (data) {
      setResultCode(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <>
      <DialogContent>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
        <p>{`code: ${resultCode || ""}`}</p>
        <p>{isLoading ? "loading data" : JSON.stringify(user || {})}</p>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            dispatch(clearCart());
            handleCloseModal();
          }}
          color="primary"
        >
          {t("common:cancel")}
        </Button>
        <Button onClick={() => history.push("/identitas")} color="primary">
          {t("common:pay")}
        </Button>
      </DialogActions>
    </>
  );
};

IdentityDataDialogComponent.propTypes = {
  t: func.isRequired,
  handleCloseModal: func.isRequired,
  history: object.isRequired,
};

export default IdentityDataDialogComponent;
