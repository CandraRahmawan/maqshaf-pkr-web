import { Dialog, DialogContent, DialogContentText, DialogTitle, TableCell, TableRow } from '@material-ui/core';
import { DataTables } from 'apps/components/ui';
import { rupiahFormat } from 'helpers/formattor.helper';
import { bool, func, object } from 'prop-types';

const ModalDetailComponent = ({ t, open, setOpen, selectedData }) => {

  const headerItems = (t) => [
    {
      name: 'number',
      label: t('common:label.no'),
    },
    {
      name: 'debet',
      label: t('dashboard_transaction:table.header.name'),
    },
    {
      name: 'debet',
      label: t('dashboard_transaction:table.header.price'),
    },
    {
      name: 'debet',
      label: t('dashboard_transaction:table.header.qty'),
    },
  ]

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{selectedData.transactionCode}</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText
          id="scroll-dialog-description"
          tabIndex={-1}
        >
          <DataTables isLoading={false} headers={headerItems(t)}>
            {selectedData?.listItem?.map((row, index) => (
              <TableRow key={row.transactionItemsId}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell style={{ textAlign: 'right' }}>{row.price}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell><b>{t('dashboard_transaction:table.header.totalPrice')}</b></TableCell>
              <TableCell style={{ textAlign: 'right' }}><b>{rupiahFormat(selectedData.total)}</b></TableCell>
            </TableRow>
          </DataTables>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

ModalDetailComponent.propTypes = {
  t: func.isRequired,
  open: bool.isRequired,
  setOpen: func.isRequired,
  selectedData: object.isRequired,
};

export default ModalDetailComponent;
