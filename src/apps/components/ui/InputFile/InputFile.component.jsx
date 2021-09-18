import { Box, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

const InputFile = ({ classes, onChange, value, error }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={e => {
          onChange(e)
          setSelectedImage(e.target.files[0])
        }}
      />
      <label htmlFor="select-image">
        <Button variant="outlined" color="primary" component="span">
          {/* Upload Image */}
          {imageUrl && selectedImage || value ? (
            <Box marginBottom={2} display="flex" textAlign="center">
              <img src={imageUrl || value} alt={selectedImage?.name} height="100px" />
            </Box>
          ) : <div>Upload Gambar</div>}
        </Button>
      </label>
      <div className={classes.text_error}>
        {error}
      </div>
    </>
  );
};

export default withStyles(styles)(InputFile);
