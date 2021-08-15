import {
  TableContainer,
  Table,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@material-ui/core';
import { object, array, bool, element } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { Skeleton } from 'apps/components/ui';

const DataTableComponent = (props) => {
  const { headers, children, isLoading } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item) => (
              <TableCell>{item.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? <Skeleton.DataTable columnCount={headers.length} /> : children}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

DataTableComponent.propTypes = {
  classes: object.isRequired,
  headers: array.isRequired,
  isLoading: bool.isRequired,
  children: element.isRequired,
};

export default withStyles(styles)(DataTableComponent);
