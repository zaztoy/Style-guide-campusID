import globals from '../../Theme/jssGlobals';

export default {
  darkTheme: {
    '& .MuiButton-containedPrimary': {
      backgroundColor: `${globals.backgroundColor.darkTheme} !important`,
      color: `${globals.color.darkTheme} !important`
    },
    '& .MuiButton-outlinedPrimary': {
      backgroundColor: `${globals.backgroundColor.darkTheme} !important`,
      color: `${globals.color.darkTheme} !important`
    }
  },

  lightTheme: {
    '& .MuiButton-containedPrimary': {
      backgroundColor: `${globals.backgroundColor.lightTheme} !important`,
      color: `${globals.color.lightTheme} !important`
    },
    '& .MuiButton-outlinedPrimary': {
      backgroundColor: `${globals.backgroundColor.lightTheme} !important`,
      color: `${globals.color.lightTheme} !important`
    }
  }
}