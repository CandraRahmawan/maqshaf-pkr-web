import { TableRow, TableCell, Box, Button } from '@material-ui/core';
import { func, object } from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import Pagination from '@material-ui/lab/Pagination';
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
    name: 'action',
    label: t('common:label.action'),
  },
];

const AdministratorListContainer = ({ classes, t }) => {
  let history = useHistory();
  const { data, isLoading, handleDelete, getPaginationTotal, handleChangePage, pageSummary } = useGetAllAdministratorHook(history);
  return (
    <>
      <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
        <Box alignSelf="center">
          <h2>{t('dashboard_administrator:table.title')}</h2>
        </Box>
      </Box>
      {history.location.search && <Alert severity="success">{t('common:alert.success')}</Alert>}
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
            <TableCell>
              <IconButton title="Ubah" aria-label="edit" color="primary" onClick={() => history.push('/dashboard/administrator/' + row.administratorId)} >
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton title="Hapus" aria-label="delete" color="secondary" onClick={() => handleDelete(row.administratorId)} >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </DataTables>
      <Box marginTop={2} display="flex" justifyContent="flex-end">
        <Pagination count={getPaginationTotal()} onChange={handleChangePage} page={Number(pageSummary.page)}  color="primary" />
      </Box>
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
