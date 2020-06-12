import { createUseStyles } from 'react-jss';
import globals from '../Theme/jssGlobals';

export default createUseStyles({
  root: {
    color: `${globals.primary} !important`,
    height: '8px !important',
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
  },
  thumb: {
    height: '24px !important',
    width: '24px !important',
    backgroundColor: '#fff !important',
    border: '2px solid currentColor !important',
    marginTop: '-8px !important',
    marginLeft: '-12px !important',
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit !important',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px) !important',
  },
  track: {
    height: '8px !important',
    borderRadius: '4 !important',
  },
  rail: {
    height: '8px !important',
    borderRadius: '4px !important',
  },
  container: {
    display: 'flex',
  },
  rangeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    '& span': {
      color: globals.primary,
    },
  },
});
