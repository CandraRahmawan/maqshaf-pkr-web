import { Box, TableCell, TableRow, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
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
  const { data, pageSummary, isLoading, handleChange, handleSearch, getPaginationTotal, handleChangePage } = useGetAllDebetTransactionHook();
  return (
    <>
      <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
        <Box alignSelf="center">
          <h2>{t('dashboard_transaction:table.title')}</h2>
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
          </TableRow>
        ))}
      </DataTables>
      <Box marginTop={2} display="flex" justifyContent="flex-end">
        <Pagination count={getPaginationTotal()} onChange={handleChangePage} page={Number(pageSummary.page)}  color="primary" />
      </Box>
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
