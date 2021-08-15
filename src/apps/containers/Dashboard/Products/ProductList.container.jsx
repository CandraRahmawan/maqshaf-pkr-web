import { TableRow, TableCell } from '@material-ui/core';
import { func, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { DataTables } from 'apps/components/ui';
import useGetAllProductHook from 'hooks/Dashboard/Products/useGetAllProduct.hook';
import { defaultFormatDate, rupiahFormat } from 'helpers/formattor.helper';

import styles from './style';

const headers = (t) => [
  {
    name: 'number',
    label: t('common:label.no'),
  },
  {
    name: 'image',
    label: t('dashboard_product:table.header.image'),
  },
  {
    name: 'code',
    label: t('dashboard_product:table.header.code'),
  },
  {
    name: 'name',
    label: t('dashboard_product:table.header.name'),
  },
  {
    name: 'createdAt',
    label: t('common:label.createdAt'),
  },
  {
    name: 'price',
    label: t('dashboard_product:table.header.price'),
  },
  {
    name: 'category',
    label: t('dashboard_product:table.header.category'),
  },
  {
    name: 'status',
    label: t('dashboard_product:table.header.status'),
  },
  {
    name: 'action',
    label: t('common:label.action'),
  },
];

const ProductListContainer = ({ t, classes }) => {
  const { data, isLoading } = useGetAllProductHook();
  return (
    <DataTables isLoading={isLoading} headers={headers(t)}>
      {data?.data?.map((row, index) => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell align="right">
            <img src={row.image} width={50} height={50} />
          </TableCell>
          <TableCell>{row.code}</TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{defaultFormatDate(row.createdAt)}</TableCell>
          <TableCell>{rupiahFormat(row.price)}</TableCell>
          <TableCell>{row.category}</TableCell>
          <TableCell>{row.isActive}</TableCell>
          <TableCell></TableCell>
        </TableRow>
      ))}
    </DataTables>
  );
};

ProductListContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(ProductListContainer);
