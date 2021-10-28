import { Box, Divider, Paper, Input, TextField, InputAdornment, IconButton, FormControl, FormLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Alert from '@material-ui/lab/Alert';
import { Button } from 'apps/components/ui';
import clsx from 'clsx';
import useDetailAdministratorHook from 'hooks/Dashboard/Administrator/useDetailAdministrator.hook';
import { func, object } from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './style';

const AdministratorDetailContainer = ({ history, classes, t }) => {
  const params = useParams()
  const { formik, error, isLoading, showAlert, togglePassword, handleTogglePassword } = useDetailAdministratorHook(t, history, params.id);
  return (
    <div>
      <Paper className={clsx(classes.paper, classes.paper_form)}>
        <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
          <Box alignSelf="center">
            <h2>{t('dashboard_administrator:form.title')}</h2>
          </Box>
        </Box>
        <Divider className={classes.title_divider} />
        {showAlert && <Alert severity="error">{error?.message}</Alert>}
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Box display="flex" marginBottom={1}>
            <TextField
              id="fullName"
              label={t('dashboard_administrator:form.fullName')}
              name="fullName"
              value={formik.values.fullName}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              onChange={formik.handleChange}
              helperText={formik.touched.fullName && formik.errors.fullName}
              style={{ margin: 8 }}
              placeholder={t('dashboard_administrator:placeholder.fullName')}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box display="flex" marginBottom={1}>
            <TextField
              id="username"
              label={t('dashboard_administrator:form.username')}
              name="username"
              value={formik.values.username}
              error={formik.touched.username && Boolean(formik.errors.username)}
              onChange={formik.handleChange}
              helperText={formik.touched.username && formik.errors.username}
              style={{ margin: 8 }}
              placeholder={t('dashboard_administrator:placeholder.username')}
              fullWidth
              margin="normal"
              inputProps={{ autoComplete: 'off' }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          {
            params.id === 'add' && (
              <>
                <Box display="flex" marginBottom={1}>
                  <FormControl fullWidth style={{ paddingRight: 14, marginTop: 10 }}>
                    <FormLabel style={{ fontSize: 12, paddingLeft: 8 }}>{t('dashboard_administrator:form.password')}</FormLabel>
                    <Input
                      type={togglePassword.password ? 'text' : 'password'}
                      id="password"
                      label={t('dashboard_administrator:form.password')}
                      name="password"
                      value={formik.values.password}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      onChange={formik.handleChange}
                      helperText={formik.touched.password && formik.errors.password}
                      style={{ margin: 8 }}
                      placeholder={t('dashboard_administrator:placeholder.password')}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => handleTogglePassword('password')}
                          >
                            {togglePassword.password ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>

                <Box display="flex" marginBottom={1}>
                  <FormControl fullWidth style={{ paddingRight: 14, marginTop: 10 }}>
                    <FormLabel style={{ fontSize: 12, paddingLeft: 8 }}>{t('dashboard_administrator:form.repassword')}</FormLabel>
                    <Input
                      type={togglePassword.repassword ? 'text' : 'password'}
                      id="repassword"
                      label={t('dashboard_administrator:form.repassword')}
                      name="repassword"
                      value={formik.values.repassword}
                      error={formik.touched.repassword && Boolean(formik.errors.repassword)}
                      onChange={formik.handleChange}
                      helperText={formik.touched.repassword && formik.errors.repassword}
                      style={{ margin: 8 }}
                      placeholder={t('dashboard_administrator:placeholder.repassword')}
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => handleTogglePassword('repassword')}
                          >
                            {togglePassword.repassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </>
            )
          }

          <Box display="flex" gridGap={20} justifyContent="center" paddingTop={4}>
            <Button variant="contained" color="secondary" className={classes.button_tambah} onClick={() => history.replace('/dashboard/administrator')}>
              {t('dashboard_administrator:button.cancel')}
            </Button>
            <Button variant="contained" color="primary" className={classes.button_tambah} type="submit" isLoading={isLoading}>
              {t('dashboard_administrator:button.save')}
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

AdministratorDetailContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(AdministratorDetailContainer);
