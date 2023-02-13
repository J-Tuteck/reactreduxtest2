import React, { useState } from 'react';
import Popover from '@mui/material/Popover';

const ImagePopover = (props) => {
  const [anchorEl, setAnchorEl] = useState(props.anchorEl);
  const [image, setImage] = useState(props.image);

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={true}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <img src={image} alt={"image"} />
      </Popover>
    </div>
  );
}

export default ImagePopover