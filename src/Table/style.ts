import globals from '../Theme/jssGlobals';

export default {
  darkTheme: {
    backgroundColor: `${globals.backgroundColor.darkTheme} !important`,
    color: `${globals.color.darkTheme} !important`,
    width: '40%',
    '& .Mui-selected': {
      color: `${globals.primary} !important`,
    },
    '& .MuiTableCell-root': {
      borderBottom: 'red',
      color: `${globals.color.darkTheme}`,
    },
    '& .MuiTableCell-root.MuiTableCell-head': {
      color: `${globals.primary}`,
      fontWeight: 'bolder'
    }
  },

  mediumTheme: {
    backgroundColor: `${globals.backgroundColor.mediumTheme} !important`,
    color: `${globals.color.mediumTheme} !important`,
    width: '40%',

    '& .MuiTableCell-root.MuiTableCell-head': {
      fontWeight: 'bolder'
    }
  },

  lightTheme: {
    backgroundColor: `${globals.backgroundColor.lightTheme} !important`,
    color: `${globals.color.lightTheme} !important`,
    width: '40%',

    '& .MuiTableCell-root.MuiTableCell-head': {
      fontWeight: 'bolder'
    }
  },
};
