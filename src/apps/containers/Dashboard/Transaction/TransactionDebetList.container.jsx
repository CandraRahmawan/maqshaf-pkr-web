import { Box, TableCell, TableRow, TextField, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Pagination from '@material-ui/lab/Pagination';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import { DataTables } from 'apps/components/ui';
import { defaultFormatDate, rupiahFormat } from 'helpers/formattor.helper';
import useGetAllDebetTransactionHook from 'hooks/Dashboard/Transaction/useGetAllDebetTransaction.hook';
import { func, object } from 'prop-types';
import styles from './style';

const headers = (t) => [
  {
    name: 'number',
    label: t('common:label.no'),
  },
  {
    name: 'transactionCode',
    label: t('dashboard_transaction:table.header.trxCode'),
  },
  {
    name: 'nis',
    label: t('dashboard_transaction:table.header.nis'),
  },
  {
    name: 'fullName',
    label: t('common:label.fullName'),
  },
  // {
  //   name: 'address',
  //   label: t('dashboard_transaction:table.header.address'),
  // },
  {
    name: 'debet',
    label: t('dashboard_transaction:table.header.amount'),
  },
  {
    name: 'createdAt',
    label: t('common:label.transactionDate'),
  },
];

const headerItems = (t) => [
  {
    name: 'number',
    label: t('common:label.no'),
  },
  {
    name: 'debet',
    label: t('dashboard_transaction:table.header.name'),
  },
  {
    name: 'debet',
    label: t('dashboard_transaction:table.header.price'),
  },
  {
    name: 'debet',
    label: t('dashboard_transaction:table.header.qty'),
  },
]

const TransactionDebetListContainer = ({ classes, t }) => {
  const {
    data, pageSummary, isLoading,
    handleChange, handleSearch, getPaginationTotal,
    handleChangePage,
    setOpen,
    descriptionElementRef,
    open, handleOpen, selectedData
  } = useGetAllDebetTransactionHook();
  return (
    <>
      <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
        <Box alignSelf="center">
          <h2>{t('dashboard_transaction:table.titleDebet')}</h2>
        </Box>
      </Box>

      <DataTables isLoading={isLoading} headers={headers(t)}>
        <TableRow>
          <TableCell component="th" scope="row"></TableCell>
          <TableCell>
            <TextField variant="outlined" fullWidth placeholder="Cari Kode Transaksi" onKeyPress={handleSearch} onChange={(e) => handleChange(e, 'trxCode')} />
          </TableCell>
          <TableCell>
            <TextField variant="outlined" fullWidth placeholder="Cari NIS" onKeyPress={handleSearch} onChange={(e) => handleChange(e, 'nis')} />
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>

        {data?.data?.map((row, index) => (
          <TableRow key={row.depositTransactionId}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell>{row.transactionCode}</TableCell>
            <TableCell>{row.nis}</TableCell>
            <TableCell>{row.fullName}</TableCell>
            {/* <TableCell>{row.address}</TableCell> */}
            <TableCell align="right">{rupiahFormat(row.debet)}</TableCell>
            <TableCell>{defaultFormatDate(row.createdAt)}</TableCell>
            <TableCell>
              <IconButton title="Ubah" aria-label="edit" color="primary" onClick={() => handleOpen(row)} >
                <RemoveRedEye fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </DataTables>
      <Box marginTop={2} display="flex" justifyContent="flex-end">
        <Pagination count={getPaginationTotal()} onChange={handleChangePage} page={Number(pageSummary.page)} color="primary" />
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <DataTables isLoading={isLoading} headers={headerItems(t)}>
              {selectedData?.listItem?.map((row, index) => (
                <TableRow key={row.transactionItemsId}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.qty}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell><b>{t('dashboard_transaction:table.header.totalPrice')}</b></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell><b>{selectedData.total}</b></TableCell>
              </TableRow>
            </DataTables>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};

TransactionDebetListContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(TransactionDebetListContainer);
