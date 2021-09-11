import { Box, Divider, Paper, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import QrReader from 'react-qr-reader';
import { CropFreeOutlined } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import { Button } from 'apps/components/ui';
import useDetailUserHook from 'hooks/Dashboard/Users/useDetailUser.hook';
import { func, object } from 'prop-types';
import styles from './style';

const UserDetailContainer = ({ history, classes, t }) => {
  const params = useParams()
  const { formik, error, isLoading, showAlert, showQRReader, setShowQRReader, handleScan, handleScanError } = useDetailUserHook(t, history, params.id);
  return (
    <div>
      <Paper className={clsx(classes.paper, classes.paper_form)}>
        <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
          <Box alignSelf="center">
            <h2>{t('dashboard_user:form.title')}</h2>
          </Box>
        </Box>
        <Divider className={classes.title_divider} />
        {showAlert && <Alert severity="error">{error?.message}</Alert>}
        {showQRReader ? (
          <QrReader
            delay={300}
            onError={handleScanError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        ) : (
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            <Box display="flex" marginBottom={1} marginTop={1}>
              <TextField
                id="nis"
                label={t('dashboard_user:form.nis')}
                name="nis"
                value={formik.values.nis}
                error={formik.touched.nis && Boolean(formik.errors.nis)}
                onChange={formik.handleChange}
                helperText={formik.touched.nis && formik.errors.nis}
                style={{ margin: 8 }}
                placeholder={t('dashboard_user:placeholder.nis')}
                fullWidth
                margin="normal"
                inputProps={{
                  maxLength: 16,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowQRReader(true)}
                      >
                        <CropFreeOutlined />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                InputLabelProps={{
                  shrink: true,

                }}
              />
            </Box>
            <Box display="flex" marginBottom={1}>
              <TextField
                id="fullName"
                label={t('dashboard_user:form.fullName')}
                name="fullName"
                value={formik.values.fullName}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                onChange={formik.handleChange}
                helperText={formik.touched.fullName && formik.errors.fullName}
                style={{ margin: 8 }}
                placeholder={t('dashboard_user:placeholder.fullName')}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box display="flex" marginBottom={1}>
              <TextField
                id="class"
                label={t('dashboard_user:form.class')}
                name="class"
                value={formik.values.class}
                error={formik.touched.class && Boolean(formik.errors.class)}
                onChange={formik.handleChange}
                helperText={formik.touched.class && formik.errors.class}
                style={{ margin: 8 }}
                placeholder={t('dashboard_user:placeholder.class')}
                fullWidth
                margin="normal"
                inputProps={{ autoComplete: 'off' }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box display="flex" marginBottom={1}>
              <TextField
                id="address"
                label={t('dashboard_user:form.address')}
                name="address"
                multiline
                rows={3}
                value={formik.values.address}
                error={formik.touched.address && Boolean(formik.errors.address)}
                onChange={formik.handleChange}
                helperText={formik.touched.address && formik.errors.address}
                style={{ margin: 8 }}
                placeholder={t('dashboard_user:placeholder.address')}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box display="flex" marginBottom={1}>
              <TextField
                type="password"
                id="pin"
                label={t('dashboard_user:form.pin')}
                name="pin"
                autoComplete="off"
                value={formik.values.pin}
                error={formik.touched.pin && Boolean(formik.errors.pin)}
                onChange={formik.handleChange}
                helperText={formik.touched.pin && formik.errors.pin}
                style={{ margin: 8 }}
                placeholder={t('dashboard_user:placeholder.pin')}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box display="flex" gridGap={20} justifyContent="center" paddingTop={4}>
              <Button variant="contained" color="secondary" className={classes.button_tambah} onClick={() => history.replace('/dashboard/santri')}>
                {t('dashboard_user:button.cancel')}
              </Button>
              <Button variant="contained" color="primary" className={classes.button_tambah} type="submit" isLoading={isLoading}>
                {t('dashboard_user:button.save')}
              </Button>
            </Box>
          </form>
        )}
      </Paper>
    </div>
  );
};

UserDetailContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(UserDetailContainer);
