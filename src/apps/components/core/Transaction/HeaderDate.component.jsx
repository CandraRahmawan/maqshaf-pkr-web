import { Box, MenuItem, Select } from '@material-ui/core';
import { Button } from 'apps/components/ui';
import { func, bool, number, array, any } from 'prop-types';

const HeaderDateComponent = ({ t, hideDownload, classes, isLoading, month, year, handleHeaderFilter, listYears, handleSearch, handleDownload }) => {
  return (
    <Box display="flex" marginBottom={4} marginTop={4}>
      <Box paddingLeft={2} alignItems="center" justifyContent="center" display="flex">
        <Select
          id="month"
          name="month"
          labelId="monthLabel"
          value={month}
          onChange={(val) => handleHeaderFilter(val.target.value, 'M')}
        >
          <MenuItem value="1">Januari</MenuItem>
          <MenuItem value="2">Februari</MenuItem>
          <MenuItem value="3">Maret</MenuItem>
          <MenuItem value="4">April</MenuItem>
          <MenuItem value="5">Mei</MenuItem>
          <MenuItem value="6">Juni</MenuItem>
          <MenuItem value="7">Juli</MenuItem>
          <MenuItem value="8">Agustus</MenuItem>
          <MenuItem value="9">September</MenuItem>
          <MenuItem value="10">Oktober</MenuItem>
          <MenuItem value="11">November</MenuItem>
          <MenuItem value="12">Desember</MenuItem>
        </Select>
      </Box>
      <Box marginRight={2} marginLeft={2} alignItems="center" justifyContent="center" display="flex">
        -
      </Box>
      <Box alignItems="center" justifyContent="center" display="flex">
        <Select
          id="year"
          name="year"
          labelId="yearLabel"
          value={year}
          onChange={(val) => handleHeaderFilter(val.target.value, 'Y')}
        >
          {
            listYears.map((val) => <MenuItem value={val}>{val}</MenuItem>)
          }
        </Select>
      </Box>
      <Box paddingLeft={2}>
        <Button onClick={handleSearch} variant="contained" color="primary" className={classes.button_tambah} type="submit" isLoading={isLoading}>
          {t('dashboard_transaction:search')}
        </Button>
      </Box>
      {
        !hideDownload && (
          <Box paddingLeft={2}>
            <Button onClick={handleDownload} variant="contained" color="primary" className={classes.button_tambah} type="submit">
              {t('dashboard_transaction:download')}
            </Button>
          </Box>
        )
      }
    </Box>
  );
};

HeaderDateComponent.propTypes = {
  t: func.isRequired,
  hideDownload: bool.isRequired,
  isLoading: bool.isRequired,
  month: number.isRequired,
  year: number.isRequired,
  handleHeaderFilter: func.isRequired,
  listYears: array.isRequired,
  handleSearch: func.isRequired,
  classes: any.isRequired,
  handleDownload: func.isRequired
};

export default HeaderDateComponent;
