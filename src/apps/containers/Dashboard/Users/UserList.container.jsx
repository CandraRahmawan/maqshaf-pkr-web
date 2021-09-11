import { TableRow, TableCell, Button, Box } from '@material-ui/core';
import { func, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { DataTables } from 'apps/components/ui';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import LockOpenOutlined from '@material-ui/icons/LockOpenOutlined';
import EditIcon from '@material-ui/icons/Edit';
import useGetAllUserHook from 'hooks/Dashboard/Users/useGetAllUser.hook';
import { defaultFormatDate } from 'helpers/formattor.helper';
import { useHistory } from "react-router-dom";

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

const UserListContainer = ({ classes, t }) => {
  let history = useHistory();
  const { data, isLoading } = useGetAllUserHook();
  return (
    <>
      <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
        <Box alignSelf="center">
          <h2>{t('dashboard_user:table.title')}</h2>
        </Box>
      </Box>
      <Button startIcon={<AddIcon />} variant="contained" color="primary" className={classes.button_tambah} onClick={() => history.push('/dashboard/santri/add')}>
        {t('dashboard_user:button.add')}
      </Button>
      <DataTables isLoading={isLoading} headers={headers(t)}>
        {data?.data?.map((row, index) => (
          <TableRow key={row.userId}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell>{row.nis}</TableCell>
            <TableCell>{row.fullName}</TableCell>
            <TableCell>{row.class}</TableCell>
            <TableCell>{defaultFormatDate(row.createdAt)}</TableCell>
            <TableCell>{row.createdBy}</TableCell>
            <TableCell>
              <IconButton title="Ubah" aria-label="edit" color="primary" onClick={() => history.push('/dashboard/santri/' + row.userId)} >
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton title="Reset PIN" aria-label="delete" color="secondary" >
                <LockOpenOutlined fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </DataTables>
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
