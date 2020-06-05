import globals from '../Theme/jssGlobals';

export default {
  '& .MuiDialogTitle-root': {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
  },

  darkTheme: {
    '& .MuiDialog-paper': {
      backgroundColor: `${globals.backgroundColor.darkTheme} !important`,
      color: `${globals.color.darkTheme} !important`,
      width: '30%',
      alignItems: 'center',
    },

    '& .MuiDialogTitle-root': {
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
    },
  },

  mediumTheme: {
    '& .MuiDialog-paper': {
      backgroundColor: `${globals.backgroundColor.mediumTheme} !important`,
      color: `${globals.color.mediumTheme} !important`,
      width: '30%',
      alignItems: 'center',
    },
    '& .MuiDialogTitle-root': {
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
    },
  },

  lightTheme: {
    '& .MuiDialog-paper': {
      backgroundColor: `${globals.backgroundColor.lightTheme} !important`,
      color: `${globals.color.lightTheme} !important`,
      width: '30%',
      alignItems: 'center',
    },
    '& .MuiDialogTitle-root': {
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
    },
  },

  btn: {
    color: `${globals.primary} !important`,
    fontWeight: 'bold !important',
  },
};
