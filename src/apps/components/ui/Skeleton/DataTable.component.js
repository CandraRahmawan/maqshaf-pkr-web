import { TableCell, TableRow } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { number } from 'prop-types';

const DataTableComponent = ({ columnCount }) => {
  const renderComponent = [];
  for (let i = 1; i <= columnCount; i++) {
    renderComponent.push(
      <TableCell component="th" scope="row">
        <Skeleton variant="text" />
      </TableCell>
    );
  }
  return <TableRow>{renderComponent}</TableRow>;
};

DataTableComponent.propTypes = {
  columnCount: number.isRequired,
};

export default DataTableComponent;
