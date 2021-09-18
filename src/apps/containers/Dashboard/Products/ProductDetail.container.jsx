import {
  Box, Divider, FormControl, FormLabel, MenuItem, Paper, Select, TextField, RadioGroup, FormControlLabel, Radio
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { Button, InputFile } from 'apps/components/ui';
import clsx from 'clsx';
import useDetailProductHook from 'hooks/Dashboard/Products/useDetailProduct.hook';
import { func, object } from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './style';

const ProductDetailContainer = ({ history, classes, t }) => {
  const params = useParams()
  const { formik, selectedFile, imageMessage, error, isLoading, showAlert, onChangeFile, formatMoney } = useDetailProductHook(t, history, params.id);

  return (
    <div>
      <Paper className={clsx(classes.paper, classes.paper_form)}>
        <Box display="flex" justifyContent="center" className={classes.logo_login_wrapper}>
          <Box alignSelf="center">
            <h2>{t('dashboard_product:form.title')}</h2>
          </Box>
        </Box>
        <Divider className={classes.title_divider} />
        {showAlert && <Alert severity="error">{error?.message}</Alert>}
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <Box display="flex" marginBottom={1}>
            <TextField
              id="name"
              label={t('dashboard_product:form.name')}
              name="name"
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              onChange={formik.handleChange}
              helperText={formik.touched.name && formik.errors.name}
              style={{ margin: 8 }}
              placeholder={t('dashboard_product:placeholder.name')}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box  marginBottom={1} className={classes.custom_form_control}>
            <InputFile
              onChange={(val) => {
                onChangeFile(val)
              }}
              value={selectedFile}
              error={imageMessage}
            />
            {/* <TextField
              id="file"
              type="file"
              label={t('dashboard_product:form.image')}
              name="image"
              value={formik.values.image}
              error={formik.touched.image && Boolean(formik.errors.image)}
              onChange={(val) => {
                formik.handleChange(val)
                onChangeFile(val)
              }}
              helperText={formik.touched.image && formik.errors.image}
              style={{ margin: 8 }}
              placeholder={t('dashboard_product:placeholder.image')}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
          </Box>
          <Box display="flex" marginBottom={1} marginTop={1}>
            <TextField
              id="description"
              label={t('dashboard_product:form.description')}
              name="description"
              multiline
              rows={3}
              value={formik.values.description}
              error={formik.touched.description && Boolean(formik.errors.description)}
              onChange={formik.handleChange}
              helperText={formik.touched.description && formik.errors.description}
              style={{ margin: 8 }}
              placeholder={t('dashboard_product:placeholder.description')}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box display="flex" marginBottom={1}>
            <TextField
              type="numeric"
              id="price"
              label={t('dashboard_product:form.price')}
              name="price"
              value={formatMoney(formik.values.price)}
              error={formik.touched.price && Boolean(formik.errors.price)}
              onChange={formik.handleChange}
              helperText={formik.touched.price && formik.errors.price}
              style={{ margin: 8 }}
              placeholder={t('dashboard_product:placeholder.price')}
              fullWidth
              margin="normal"
              inputProps={{ autoComplete: 'off' }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box display="flex" marginBottom={1}>
            <FormControl className={clsx(classes.formControl, classes.custom_form_control)}>
              <FormLabel className={classes.custom_label} component="label">{t('dashboard_product:form.category')}</FormLabel>
              <Select
                id="category"
                name="category"
                labelId="demo-simple-select-label"
                value={formik.values.category}
                onChange={formik.handleChange}
                error={formik.touched.category && Boolean(formik.errors.category)}
                helperText={formik.touched.category && formik.errors.category}
              >
                <MenuItem value={""}>- Pilih -</MenuItem>
                <MenuItem value={"makanan"}>Makanan</MenuItem>
                <MenuItem value={"minuman"}>Minuman</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {
            params.id !== 'add' && (
              <Box display="flex" marginBottom={1}>
                <FormControl component="fieldset" className={clsx(classes.formControl, classes.custom_form_control)}>
                  <FormLabel component="label" className={classes.customLabel}>{t('dashboard_product:form.status')}</FormLabel>
                  <RadioGroup aria-label="isActive" name="isActive" value={formik.values.isActive} onChange={formik.handleChange}>
                    <FormControlLabel value={"1"} control={<Radio color="primary" />} label="Aktif" />
                    <FormControlLabel value={"0"} control={<Radio color="primary" />} label="Tidak Aktif" />
                  </RadioGroup>
                </FormControl>
              </Box>
            )
          }
          <Box display="flex" gridGap={20} justifyContent="center" paddingTop={4}>
            <Button variant="contained" color="secondary" className={classes.button_tambah} onClick={() => history.replace('/dashboard/administrator')}>
              {t('dashboard_product:button.cancel')}
            </Button>
            <Button variant="contained" color="primary" className={classes.button_tambah} type="submit" isLoading={isLoading}>
              {t('dashboard_product:button.save')}
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

ProductDetailContainer.propTypes = {
  classes: object.isRequired,
  t: func.isRequired,
  history: object.isRequired,
  location: object.isRequired,
};

export default withStyles(styles)(ProductDetailContainer);
