import {
  TableRow, TableCell, Box, Button, DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  FormControl,
  FormLabel,
  Input,
  InputAdornment,
  FormHelperText,
  DialogContentText
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { func, object } from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import Pagination from '@material-ui/lab/Pagination';
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { DataTables } from 'apps/components/ui';
import { defaultFormatDate } from 'helpers/formattor.helper';
import useGetAllAdministratorHook from 'hooks/Dashboard/Administrator/useGetAllAdministrator.hook';

import styles from './style';

const headers = (t) => [
  {
    name: 'number',
    label: t('common:label.no'),
  },
  {
    name: 'id',
    label: t('dashboard_administrator:table.header.id'),
  },
  {
    name: 'username',
    label: t('dashboard_administrator:table.header.username'),
  },
  {
    name: 'fullName',
    label: t('common:label.fullName'),
  },
  {
    name: 'createdAt',
    label: t('common:label.createdAt'),
  },
  {
    name: 'createdBy',
    label: t('common:label.createdBy'),
  },
  {
    name: 'action',
    label: t('common:label.action'),
  },
];

const AdministratorListContainer = ({ classes, t }) => {
  let history = useHistory();
  const { alert, data, selectedData, formik, isLoading, handleChangePassword, togglePassword, handleTogglePassword,
    setShowPopup, showPopup, handleClosePopup, showPopupDelete, setShowPopupDelete, handleOpenDelete,
    handleDelete, getPaginationTotal, handleChangePage, pageSummary } = useGetAllAdministratorHook(history, t);
  return (
    <>
      <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
        <Box alignSelf="center">
          <h2>{t('dashboard_administrator:table.title')}</h2>
        </Box>
      </Box>
      {alert.isShow && (
        <Box marginBottom={2}>
          <Alert severity={alert.type}>{t(alert.message)}</Alert>
        </Box>
      )}
      <Button startIcon={<AddIcon />} variant="contained" color="primary" className={classes.button_tambah} onClick={() => history.push('/dashboard/administrator/add')}>
        {t('dashboard_administrator:button.add')}
      </Button>
      <DataTables isLoading={isLoading} headers={headers(t)}>
        {data?.data?.map((row, index) => (
          <TableRow key={row.administratorId}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell>{row.administratorId}</TableCell>
            <TableCell>{row.username}</TableCell>
            <TableCell>{row.fullName}</TableCell>
            <TableCell>{defaultFormatDate(row.createdAt)}</TableCell>
            <TableCell>{row.createdBy}</TableCell>
            <TableCell>
              <IconButton title="Ubah" aria-label="edit" color="primary" onClick={() => history.push('/dashboard/administrator/' + row.administratorId)} >
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton
                title="Ubah Password"
                aria-label="Ubah Password"
                color="secondary"
                onClick={() => {
                  setShowPopup(true);
                  handleChangePassword(row);
                }}
              >
                <LockOpenOutlined fontSize="small" />
              </IconButton>
              <IconButton title="Hapus" aria-label="delete" color="secondary" onClick={() => {
                handleOpenDelete(row)
                setShowPopupDelete(true)
              }} >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </DataTables>
      <Box marginTop={2} display="flex" justifyContent="flex-end">
        <Pagination count={getPaginationTotal()} onChange={handleChangePage} page={Number(pageSummary.page)} color="primary" />
      </Box>
      <Dialog
        open={showPopupDelete}
        onClose={() => setShowPopupDelete(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t('dashboard_administrator:titleConfirmDelete')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t('dashboard_administrator:table.confirmDelete')} {selectedData.username}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPopupDelete(false)}> {t('dashboard_administrator:button.no')}</Button>
          <Button onClick={() => {
            handleDelete()
          }} autoFocus>
            {t('dashboard_administrator:button.yes')}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showPopup} aria-labelledby="form-dialog-title" onClose={handleClosePopup}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <DialogTitle id="alert-dialog-title">
            {t('dashboard_administrator:titleTopup')}
          </DialogTitle>
          <DialogContent>
            <Box display="flex" marginBottom={1}>
              <FormControl fullWidth style={{ paddingRight: 14, marginTop: 10 }}>
                <FormLabel style={{ fontSize: 12, paddingLeft: 8 }}>{t('dashboard_administrator:form.oldPassword')}</FormLabel>
                <Input
                  type={togglePassword.oldPassword ? 'text' : 'password'}
                  id="oldPassword"
                  label={t('dashboard_administrator:form.oldPassword')}
                  name="oldPassword"
                  value={formik.values.oldPassword}
                  error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
                  onChange={formik.handleChange}
                  helperText={formik.touched.oldPassword && formik.errors.oldPassword}
                  style={{ margin: 8 }}
                  placeholder={t('dashboard_administrator:placeholder.oldPassword')}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => handleTogglePassword('oldPassword')}
                      >
                        {togglePassword.password ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText style={{ marginLeft: 10 }} error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}>{formik.touched.oldPassword && formik.errors.oldPassword}</FormHelperText>
              </FormControl>
            </Box>
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
                <FormHelperText style={{ marginLeft: 10 }} error={formik.touched.password && Boolean(formik.errors.password)}>{formik.touched.password && formik.errors.password}</FormHelperText>
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
                <FormHelperText style={{ marginLeft: 10 }} error={formik.touched.repassword && Boolean(formik.errors.repassword)}>{formik.touched.repassword && formik.errors.repassword}</FormHelperText>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={handleClosePopup}>
              {' '}
              {t('dashboard_administrator:button.cancel')}
            </Button>
            <Button type="submit" autoFocus>
              {t('dashboard_administrator:button.save')}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

AdministratorListContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(AdministratorListContainer);
