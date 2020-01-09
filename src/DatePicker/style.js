import globals from './../Theme/jssGlobals';

export default {
  darkTheme: {
    '& input': {
      backgroundColor: globals.backgroundColor.darkTheme,
      color: globals.color.darkTheme,
      borderBottom: '2px solid #181818',
      padding: globals.spacing.md,
      borderRadius: '4px',
      boxShadow: '2px 2px 2px 2px rgba(200,200,200,0.6)',
      '&:hover': {
        backgroundColor: '#505050',
      },
    },
    '& .MuiInput-underline': {
      '&:after': {
        borderBottom: '2px solid rgba(197, 0, 0, 6)',
      },
    },
  },
  mediumTheme: {
    '& input': {
      backgroundColor: globals.backgroundColor.mediumTheme,
      color: globals.color.mediumTheme,
      borderBottom: '2px solid rgba(197, 0, 0, 6)',
      padding: globals.spacing.md,
      borderRadius: '4px',
      boxShadow: '2px 2px 2px 2px rgba(200,200,200,0.6)',
      '&:hover': {
        backgroundColor: '#BEBEBE',
      },
    },
    '& .MuiInput-underline': {
      '&:after': {
        borderBottom: '2px solid rgba(197, 0, 0, 6)',
      },
    },
  },
  lightTheme: {
    '& input': {
      backgroundColor: globals.backgroundColor.lightTheme,
      color: globals.color.lightTheme,
      borderBottom: '2px solid #D3D3D3',
      padding: globals.spacing.md,
      borderRadius: '4px',
      boxShadow: '2px 2px 2px 2px rgba(200,200,200,0.6)',
      '&:hover': {
        backgroundColor: '#E0E0E0',
      },
    },
    '& .MuiInput-underline': {
      '&:after': {
        borderBottom: '2px solid rgba(197, 0, 0, 6) !important',
      },
    },
  },
};
