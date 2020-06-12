import globals from '../Theme/jssGlobals';

export default {
  red: {
    '& .Mui-checked': {
      color: `${globals.primary} !important`,
    },
    '& .MuiSwitch-track': {
      backgroundColor: `${globals.primary} !important`,
    },
  },

  green: {
    '& .Mui-checked': {
      color: `green !important`,
    },
    '& .MuiSwitch-track': {
      backgroundColor: `green !important`,
    },
  },

  blue: {
    '& .Mui-checked': {
      color: `blue !important`,
    },
    '& .MuiSwitch-track': {
      backgroundColor: `blue !important`,
    },
  },
};
