import React, { useState, useRef } from 'react';
import Popover from '@mui/material/Popover';
import CardMedia from '@mui/material/CardMedia';

const ImagePopover = (props) => {
  const [anchorEl, setAnchorEl] = useState(props.anchorEl);
  const imageContain = useRef(props.image)

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
        <CardMedia
          component="img"
          height="300px"
          width={"300px"}
          image={imageContain.current}
          alt="Paella dish"
        />
      </Popover>
    </div>
  );
}

export default ImagePopover