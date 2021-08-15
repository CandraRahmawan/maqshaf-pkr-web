import { TableRow, TableCell } from '@material-ui/core';
import { func, object } from 'prop-types';
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

const AdministratorListContainer = ({ t }) => {
  const { data, isLoading } = useGetAllAdministratorHook();
  return (
    <DataTables isLoading={isLoading} headers={headers(t)}>
      {data?.data?.map((row, index) => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell>{row.administratorId}</TableCell>
          <TableCell>{row.username}</TableCell>
          <TableCell>{row.fullName}</TableCell>
          <TableCell>{defaultFormatDate(row.createdAt)}</TableCell>
          <TableCell>-</TableCell>
        </TableRow>
      ))}
    </DataTables>
  );
};

AdministratorListContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(AdministratorListContainer);
