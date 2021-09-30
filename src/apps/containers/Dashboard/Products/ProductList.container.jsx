import { TableRow, TableCell, Box, Button, TextField } from '@material-ui/core';
import { func, object } from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import Pagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
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
  let history = useHistory();
  const { data, isLoading, handleSearch, handleChange, pageSummary, getPaginationTotal, handleChangePage } = useGetAllProductHook(history);
  return (
    <>
      <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
        <Box alignSelf="center">
          <h2>{t('dashboard_product:table.title')}</h2>
        </Box>
      </Box>
      {history.location.search && <Alert severity="success">{t('common:alert.success')}</Alert>}
      <Button startIcon={<AddIcon />} variant="contained" color="primary" className={classes.button_tambah} onClick={() => history.push('/dashboard/produk/add')}>
        {t('dashboard_product:button.add')}
      </Button>
      <DataTables isLoading={isLoading} headers={headers(t)}>
        <TableRow>
          <TableCell component="th" scope="row"></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell>
            <TextField variant="outlined" fullWidth placeholder={t('dashboard_product:table.search')} onKeyPress={handleSearch} onChange={(e) => handleChange(e, 'name')} />
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        {data?.data?.map((row, index) => (
          <TableRow key={row.masterGoodsId}>
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
            <TableCell>
              <div className={row.isActive === 1 ? classes.status_active : classes.status_inactive}>
                {row.isActive === 1 ? 'Aktif' : 'Non Aktif'}
              </div>
            </TableCell>
            <TableCell>
              <IconButton title="Ubah" aria-label="edit" color="primary" onClick={() => history.push('/dashboard/produk/' + row.masterGoodsId)} >
                <EditIcon fontSize="small" />
              </IconButton>
              {/* <IconButton title="Hapus" aria-label="delete" color="secondary" onClick={() => { }} >
                <DeleteIcon fontSize="small" />
              </IconButton> */}
            </TableCell>
          </TableRow>
        ))}
      </DataTables>
      <Box marginTop={2} display="flex" justifyContent="flex-end">
        <Pagination count={getPaginationTotal()} onChange={handleChangePage} page={Number(pageSummary.page)} color="primary" />
      </Box>
    </>
  );
};

ProductListContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(ProductListContainer);
