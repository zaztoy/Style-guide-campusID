import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Snackbar from '../../src/Snackbar';

import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Snackbar',
  decorators: [withKnobs],
};

export const SnackbarStory = () => {
  const [open, setOpen] = useState(false);
  const theme = select('Theme', ['lightTheme', 'mediumTheme', 'darkTheme'], 'lightTheme');
  const type = select('Type', ['success', 'warning', 'error', 'info', ''], '');
  const customText = text('CustomText', 'Write something');
  const showCloseButton = boolean('Show close button', false);
  const autoHideDuration = select('Auto hide duration', [1000, 2000, 3000, 4000, 5000], 3000);
  const handleClick = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Toggle Snackbar
      </Button>
      <Snackbar
        autoHideDuration={autoHideDuration}
        message={<div>{customText}</div>}
        open={open}
        theme={theme}
        showCloseButton={showCloseButton}
        type={type}
        onClose={onClose}
      />
    </div>
  );
};
