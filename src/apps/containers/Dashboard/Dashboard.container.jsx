import { Box, Grid, Typography, Button } from '@material-ui/core';
import useDashboardHook from 'hooks/Dashboard/useDashboard.hook';
import { func, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeaderDateComponent from 'apps/components/core/Transaction/HeaderDate.component';
import { rupiahFormat } from 'helpers/formattor.helper';

const styles = (theme) => ({
  button_tambah: {
    marginBottom: 20,
    marginTop: 20,
  },
});

const DashboardContainer = ({ t, classes }) => {
  const { data, dataMonthly, month, year, handleHeaderFilter, listYears, isLoading, handleSearch } = useDashboardHook()

  const getCard = (total, amount, title, totalMonthly, amountMonthly) => (
    <Box
      bgcolor="blue"
      borderRadius={10}
      padding={2}
      color="white"
    >
      <Typography variant="h5" gutterBottom component="div">
        {title}
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Box>
          {
            totalMonthly ? (
              <>
                <Typography variant="caption" display="block">
                  Total Bulan ini
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {totalMonthly}
                </Typography>
              </>
            ) : null
          }
        </Box>
        <Box>
          <Typography align="right" variant="caption" display="block">
            Total Keseluruhan
          </Typography>
          <Typography align="right" variant="h6" gutterBottom component="div">
            {total}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" marginTop={1} justifyContent="space-between">
        <Box>
          {
            amountMonthly ? (
              <>
                <Typography variant="caption" display="block">
                  Nominal Bulan ini
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {rupiahFormat(amountMonthly)}
                </Typography>
              </>
            ) : null
          }

        </Box>
        <Box>
          <Typography align="right" variant="caption" display="block">
            Total Nominal
          </Typography>
          <Typography align="right" variant="h6" gutterBottom component="div">
            {amount ? rupiahFormat(amount) : null}
          </Typography>
        </Box>

      </Box>
    </Box>
  )
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <div>Dashboard</div>
        <HeaderDateComponent hideDownload classes={classes} isLoading={isLoading} t={t} month={month} year={year} handleHeaderFilter={handleHeaderFilter} listYears={listYears} handleSearch={handleSearch} />
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: 20 }}>
        <Grid container spacing={3}>
          <Grid container item spacing={3}>
            <Grid item xs={6}>
              {getCard(data?.totalSantriActive, data?.sisaSaldoAll, 'Santri Aktif')}
            </Grid>
            <Grid item xs={6}>
              {getCard(data?.totalTransaksiAll, data?.totalTransaksiAmountAll, 'Transaksi', dataMonthly?.totalTransaksi, dataMonthly?.totalTransaksiAmount)}
            </Grid>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={6}>
              {getCard(data?.totalDepositAll, data?.totalDepositAmountAll, 'Deposit', dataMonthly?.totalDeposit, dataMonthly?.totalDepositAmount)}
            </Grid>
            <Grid item xs={6}>
              {getCard(data?.totalWithDrawlAll, data?.totalWithDrawlAmount, 'Withdrawal')}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

DashboardContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(DashboardContainer);
