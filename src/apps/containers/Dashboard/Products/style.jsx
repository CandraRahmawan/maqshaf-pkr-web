const styles = (theme) => ({
  button_tambah: {
    marginBottom: 20,
    marginTop: 20,
  },
  title_divider: {
    marginBottom: 20,
  },
  paper_form: {
    padding: 20
  },
  custom_label: {
    fontSize: '12px !important'
  },
  custom_form_control: {
    marginTop: 20,
    marginLeft: 10
  },
  text_error: {
    color: '#f44336',
    fontSize: 12
  },
  status_active: {
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center'
  },
  status_inactive: {
    color: 'white',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center'
  }
});

export default styles;
