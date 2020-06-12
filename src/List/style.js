import globals from '../Theme/jssGlobals';

export default {
  darkTheme: {
    backgroundColor: `${globals.backgroundColor.darkTheme} !important`,
    color: `${globals.color.darkTheme} !important`,
    width: '40%',
    '& .Mui-selected': {
      color: `${globals.primary} !important`,
    },
  },

  mediumTheme: {
    backgroundColor: `${globals.backgroundColor.mediumTheme} !important`,
    color: `${globals.color.mediumTheme} !important`,
    width: '40%',
  },

  lightTheme: {
    backgroundColor: `${globals.backgroundColor.lightTheme} !important`,
    color: `${globals.color.lightTheme} !important`,
    width: '40%',
  },
};
