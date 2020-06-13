import globals from '../Theme/jssGlobals';

export default {
  snackbarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  darkTheme: {
    backgroundColor: `${globals.backgroundColor.darkTheme} !important`,
    color: `${globals.primary} !important`,
    fontWeight: `600 !important`,
    '& .MuiSnackbarContent-message': {
      width: '100%',
    },
  },

  mediumTheme: {
    backgroundColor: `${globals.backgroundColor.mediumTheme} !important`,
    color: `${globals.color.mediumTheme} !important`,
    fontWeight: `600 !important`,
    '& .MuiSnackbarContent-message': {
      width: '100%',
    },
  },

  lightTheme: {
    backgroundColor: `${globals.backgroundColor.lightTheme} !important`,
    color: `${globals.color.lightTheme} !important`,
    fontWeight: `600 !important`,
    '& .MuiSnackbarContent-message': {
      width: '100%',
    },
  },
};
