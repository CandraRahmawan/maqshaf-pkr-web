import {
  TableRow,
  TableCell,
  Popover,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@material-ui/core';
import { func, object } from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import Alert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';
import { DataTables } from 'apps/components/ui';
import { rupiahFormat } from 'helpers/formattor.helper';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DeleteIcon from '@material-ui/icons/Delete';
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined';
import EditIcon from '@material-ui/icons/Edit';
import useGetAllUserHook from 'hooks/Dashboard/Users/useGetAllUser.hook';
import { defaultFormatDate } from 'helpers/formattor.helper';
import { useHistory } from 'react-router-dom';

import styles from './style';

const headers = (t) => [
  {
    name: 'number',
    label: t('common:label.no'),
  },
  {
    name: 'nis',
    label: t('dashboard_user:table.header.nis'),
  },
  {
    name: 'fullName',
    label: t('common:label.fullName'),
  },
  {
    name: 'class',
    label: t('dashboard_user:table.header.class'),
  },
  {
    name: 'address',
    label: t('dashboard_user:table.header.address'),
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
    name: 'saldo',
    label: t('common:balance'),
  },
  {
    name: 'action',
    label: t('common:label.action'),
  },
];

const UserListContainer = ({ classes, t }) => {
  let history = useHistory();
  const {
    alert,
    data,
    isLoading,
    showPopup,
    handleConfirm,
    setSelectedData,
    selectedData,
    setShowPopup,
    pageSummary,
    handleChange,
    handleSearch,
    getPaginationTotal,
    handleChangePage,
    formik,
    formatMoney,
    showPopupSaldo,
    setShowPopupSaldo,
    handleCloseSaldo,
  } = useGetAllUserHook(history, t);
  return (
    <>
      <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
        <Box alignSelf="center">
          <h2>{t('dashboard_user:table.title')}</h2>
        </Box>
      </Box>
      {alert.isShow && (
        <Box marginBottom={2}>
          <Alert severity={alert.type}>{t(alert.message)}</Alert>
        </Box>
      )}
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="primary"
        className={classes.button_tambah}
        onClick={() => history.push('/dashboard/santri/add')}
      >
        {t('dashboard_user:button.add')}
      </Button>
      <Box marginBottom={2}>{t('dashboard_user:table.descriptionPIN')}</Box>
      <DataTables isLoading={isLoading} headers={headers(t)}>
        <TableRow>
          <TableCell component="th" scope="row"></TableCell>
          <TableCell>
            <TextField
              variant="outlined"
              style={{ width: 100 }}
              placeholder={t('dashboard_user:table.searchNIS')}
              onKeyPress={handleSearch}
              onChange={(e) => handleChange(e, 'nis')}
            />
          </TableCell>
          <TableCell>
            <TextField
              variant="outlined"
              style={{ width: 120 }}
              placeholder={t('dashboard_user:table.searchName')}
              onKeyPress={handleSearch}
              onChange={(e) => handleChange(e, 'name')}
            />
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        {data?.data?.map((row, index) => (
          <TableRow key={row.userId}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell>{row.nis}</TableCell>
            <TableCell>{row.fullName}</TableCell>
            <TableCell>{row.class}</TableCell>
            <TableCell>{row.address}</TableCell>
            <TableCell>{defaultFormatDate(row.createdAt)}</TableCell>
            <TableCell>{row.createdBy}</TableCell>
            <TableCell>{rupiahFormat(row.saldo)}</TableCell>
            <TableCell>
              <IconButton
                title="Ubah"
                aria-label="edit"
                color="primary"
                onClick={() => history.push('/dashboard/santri/' + row.userId)}
              >
                <EditIcon fontSize="small" />
              </IconButton>
              <>
                <IconButton
                  title={`${t('dashboard_user:table.titleTopup')} / ${t(
                    'dashboard_user:table.titleWithdrawal'
                  )}`}
                  aria-label="topup"
                  color="default"
                  onClick={(e) => setSelectedData({ ...row, anchorEl: e.currentTarget })}
                >
                  <AccountBalanceWalletIcon fontSize="small" />
                </IconButton>
                <Popover
                  id={row.userId}
                  onClose={() => setSelectedData({})}
                  open={selectedData.anchorEl && selectedData.userId === row.userId}
                  anchorEl={selectedData.anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <List>
                    <ListItem
                      button
                      onClick={() => {
                        setShowPopupSaldo(true);
                        setSelectedData(row);
                      }}
                    >
                      <ListItemText primary={t('dashboard_user:table.titleTopup')} />
                    </ListItem>
                    <ListItem
                      button
                      onClick={() => {
                        setShowPopupSaldo(true);
                        setSelectedData({ ...row, isWithdrawal: true });
                      }}
                    >
                      <ListItemText primary={t('dashboard_user:table.titleWithdrawal')} />
                    </ListItem>
                  </List>
                </Popover>
              </>
              <IconButton
                title="Reset PIN"
                aria-label="reset PIN"
                color="secondary"
                onClick={() => {
                  setShowPopup(true);
                  setSelectedData(row);
                }}
              >
                <LockOpenOutlined fontSize="small" />
              </IconButton>
              <IconButton
                title="Hapus"
                aria-label="hapus"
                color="secondary"
                onClick={() => {
                  setShowPopup(true);
                  setSelectedData({ ...row, isDelete: true });
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              {/* <IconButton title="Topup" aria-label="topup" color="default" onClick={() => {
                setShowPopupTopup(true)
                setSelectedData(row)
              }} >
                <AccountBalanceWalletIcon fontSize="small" />
              </IconButton> */}
            </TableCell>
          </TableRow>
        ))}
      </DataTables>
      <Box marginTop={2} display="flex" justifyContent="flex-end">
        <Pagination
          count={getPaginationTotal()}
          onChange={handleChangePage}
          page={Number(pageSummary.page)}
          color="primary"
        />
      </Box>
      <Dialog
        open={showPopup}
        onClose={() => setShowPopup(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {selectedData.isDelete
            ? t('dashboard_user:table.titleConfirmDelete')
            : t('dashboard_user:table.titleConfirmReset')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {selectedData.isDelete
              ? t('dashboard_user:table.confirmDelete')
              : t('dashboard_user:table.confirmReset')}{' '}
            {selectedData.nis}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPopup(false)}> {t('dashboard_user:button.no')}</Button>
          <Button onClick={() => handleConfirm(selectedData.isDelete)} autoFocus>
            {t('dashboard_user:button.yes')}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={showPopupSaldo} aria-labelledby="form-dialog-title" onClose={handleCloseSaldo}>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <DialogTitle id="alert-dialog-title">
            {selectedData.isWithdrawal
              ? t('dashboard_user:table.titleWithdrawal')
              : t('dashboard_user:table.titleTopup')}
          </DialogTitle>
          <DialogContent>
            {selectedData.isWithdrawal && (
              <Box marginBottom={2}>
                {t('dashboard_user:table.titleBalance')}: {rupiahFormat(selectedData.saldo)}
              </Box>
            )}
            <TextField
              name="balance"
              value={formatMoney(formik.values.balance)}
              error={formik.touched.balance && Boolean(formik.errors.balance)}
              onChange={formik.handleChange}
              helperText={formik.touched.balance && formik.errors.balance}
              label={t('dashboard_user:form.balance')}
              type="text"
            />
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={handleCloseSaldo}>
              {' '}
              {t('dashboard_user:button.cancel')}
            </Button>
            <Button type="submit" autoFocus>
              {t('dashboard_user:button.save')}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

UserListContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(UserListContainer);
