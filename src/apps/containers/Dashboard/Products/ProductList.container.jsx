import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';
import { func, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Skeleton } from 'apps/components/ui';
import useGetAllProductHook from 'hooks/Dashboard/Products/useGetAllProduct.hook';

import styles from './style';

const ProductListContainer = ({ t, classes }) => {
  const { data, isLoading } = useGetAllProductHook();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t('dashboard_product:table.header.no')}</TableCell>
            <TableCell align="right">{t('dashboard_product:table.header.image')}</TableCell>
            <TableCell align="right">{t('dashboard_product:table.header.code')}</TableCell>
            <TableCell align="right">{t('dashboard_product:table.header.name')}</TableCell>
            <TableCell align="right">{t('dashboard_product:table.header.price')}</TableCell>
            <TableCell align="right">{t('dashboard_product:table.header.category')}</TableCell>
            <TableCell align="right">{t('dashboard_product:table.header.status')}</TableCell>
            <TableCell align="right">{t('dashboard_product:table.header.action')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <Skeleton.DataTable columnCount={8} />
          ) : (
            data?.data?.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="right">
                  <img src={row.image} width={50} height={50} />
                </TableCell>
                <TableCell align="right">{row.code}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.isActive}</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

ProductListContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(ProductListContainer);
