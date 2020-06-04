import globals from '../Theme/jssGlobals';
export default {
  circular: {
    primary: {
      color: globals.primary,
    },
    light: {
      color: globals.light,
    },
    dark: {
      color: globals.dark,
    },
  },

  linear: {
    primary: {
      backgroundColor: `${globals.primary} !important`,
    },
    light: {
      backgroundColor: `${globals.light} !important`,
    },
    dark: {
      backgroundColor: `${globals.dark} !important`,
    },
  },
};
