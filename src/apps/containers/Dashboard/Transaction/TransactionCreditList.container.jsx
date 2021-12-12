import { Box, TableCell, TableRow, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import HeaderDateComponent from 'apps/components/core/Transaction/HeaderDate.component';
import { DataTables } from 'apps/components/ui';
import { defaultFormatDate, rupiahFormat } from 'helpers/formattor.helper';
import useGetAllCreditTransactionHook from 'hooks/Dashboard/Transaction/useGetAllCreditTransaction.hook';
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
    name: 'kredit',
    label: t('dashboard_transaction:table.header.amount'),
  },
  {
    name: 'createdAt',
    label: t('common:label.transactionDate'),
  },
];

const TransactionCreditListContainer = ({ classes, t }) => {
  const {
    searchValue,
    data, isLoading, refetchAll, handleSearch, handleChange,
    pageSummary, getPaginationTotal, handleChangePage,
    month, year, handleHeaderFilter, listYears, handleDownload
  } = useGetAllCreditTransactionHook();

  return (
    <>
      <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
        <Box alignSelf="center">
          <h2>{t('dashboard_transaction:table.title')}</h2>
        </Box>
      </Box>
      <HeaderDateComponent classes={classes} t={t} isLoading={isLoading} month={month} year={year} handleHeaderFilter={handleHeaderFilter} listYears={listYears} handleSearch={refetchAll} handleDownload={handleDownload} />
      <DataTables isLoading={isLoading} headers={headers(t)}>
        <TableRow>
          <TableCell component="th" scope="row"></TableCell>
          <TableCell>
            <TextField variant="outlined" fullWidth placeholder={t('dashboard_transaction:table.searchTrxCode')} onKeyPress={handleSearch} onChange={(e) => handleChange(e, 'trxCode')} value={searchValue?.trxCode || ''} />
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        {data?.data?.map((row, index) => (
          <TableRow key={row.depositTransactionId}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell>{row.transactionCode}</TableCell>
            <TableCell align="right">{rupiahFormat(row.kredit)}</TableCell>
            <TableCell>{defaultFormatDate(row.createdAt)}</TableCell>
          </TableRow>
        ))}
      </DataTables>
      <Box marginTop={2} display="flex" justifyContent="flex-end">
        <Pagination count={getPaginationTotal()} onChange={handleChangePage} page={Number(pageSummary.page)} color="primary" />
      </Box>
    </>
  );
};

TransactionCreditListContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(TransactionCreditListContainer);
