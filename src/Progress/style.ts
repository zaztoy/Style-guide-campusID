import globals from '../Theme/jssGlobals';

export default {
  circular: {
    mediumTheme: {
      color: globals.color.mediumTheme,
    },
    lightTheme: {
      color: globals.color.lightTheme,
    },
    darkTheme: {
      color: globals.color.darkTheme,
    },
  },

  linear: {
    mediumTheme: {
      backgroundColor: `${globals.backgroundColor.mediumTheme} !important`,
    },
    lightTheme: {
      backgroundColor: `${globals.backgroundColor.lightTheme} !important`,
    },
    darkTheme: {
      backgroundColor: `${globals.backgroundColor.darkTheme} !important`,
    },
  },
};
