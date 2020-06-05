import { createUseStyles } from 'react-jss';
import globals from '../Theme/jssGlobals';

export default createUseStyles({
  root: {
    color: `${globals.primary} !important`,
    height: '8px !important',
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
