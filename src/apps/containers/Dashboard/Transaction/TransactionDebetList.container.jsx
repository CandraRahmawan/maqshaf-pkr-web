import { IconButton, Box, TableCell, TableRow, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import Pagination from '@material-ui/lab/Pagination';
import HeaderDateComponent from 'apps/components/core/Transaction/HeaderDate.component';
import ModalDetailComponent from 'apps/components/core/Transaction/ModalDetail.component';
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

const TransactionDebetListContainer = ({ classes, t }) => {
  const {
    searchValue,
    data, pageSummary, isLoading, refetchAll,
    handleChange, handleSearch, getPaginationTotal,
    handleChangePage,
    setOpen, handleDownload,
    open, handleOpen, selectedData,
    month, year, handleHeaderFilter, listYears
  } = useGetAllDebetTransactionHook();

  return (
    <>
      <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
        <Box alignSelf="center">
          <h2>{t('dashboard_transaction:table.titleDebet')}</h2>
        </Box>
      </Box>
      <HeaderDateComponent classes={classes} t={t} isLoading={isLoading} month={month} year={year} handleHeaderFilter={handleHeaderFilter} listYears={listYears} handleSearch={refetchAll} handleDownload={handleDownload} />
      <DataTables isLoading={isLoading} headers={headers(t)}>
        <TableRow>
          <TableCell component="th" scope="row"></TableCell>
          <TableCell>
            <TextField variant="outlined" fullWidth placeholder="Cari Kode Transaksi" onKeyPress={handleSearch} onChange={(e) => handleChange(e, 'trxCode')} value={searchValue?.trxCode || ''} />
          </TableCell>
          <TableCell>
            <TextField variant="outlined" fullWidth placeholder="Cari NIS" onKeyPress={handleSearch} onChange={(e) => handleChange(e, 'nis')} value={searchValue?.nis || ''} />
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
              <IconButton title="Detail" aria-label="edit" color="primary" onClick={() => handleOpen(row)} >
                <RemoveRedEye fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </DataTables>
      <Box marginTop={2} display="flex" justifyContent="flex-end">
        <Pagination count={getPaginationTotal()} onChange={handleChangePage} page={Number(pageSummary.page)} color="primary" />
      </Box>
      <ModalDetailComponent t={t} open={open} setOpen={setOpen} selectedData={selectedData} />
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
