import { TableRow, TableCell } from '@material-ui/core';
import { func, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { DataTables } from 'apps/components/ui';
import useGetAllUserHook from 'hooks/Dashboard/Users/useGetAllUser.hook';
import { defaultFormatDate } from 'helpers/formattor.helper';

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
    label: t('dashboard_user:table.header.fullName'),
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

const UserListContainer = ({ t }) => {
  const { data, isLoading } = useGetAllUserHook();
  return (
    <DataTables isLoading={isLoading} headers={headers(t)}>
      {data?.data?.map((row, index) => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell>{row.nis}</TableCell>
          <TableCell>{row.fullName}</TableCell>
          <TableCell>{row.class}</TableCell>
          <TableCell>{defaultFormatDate(row.createdAt)}</TableCell>
          <TableCell>{row.createdBy}</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
      ))}
    </DataTables>
  );
};

UserListContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(UserListContainer);
