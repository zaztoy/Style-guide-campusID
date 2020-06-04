import globals from '../../Theme/jssGlobals';

export default {
  darkTheme: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: `${globals.backgroundColor.darkTheme} !important`,
    color: `${globals.color.darkTheme} !important`,
    width: '50%',
    alignItems: 'center',
  },

  mediumTheme: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: `${globals.backgroundColor.mediumTheme} !important`,
    color: `${globals.color.mediumTheme} !important`,
    width: '50%',
    alignItems: 'center',
  },

  lightTheme: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: `${globals.backgroundColor.lightTheme} !important`,
    color: `${globals.color.lightTheme} !important`,
    width: '50%',
    alignItems: 'center',
  },

  hrStyle: {
    color: `${globals.primary} !important`,
    height: '0.5px',
    width: '80% !important',
  },

  containerText: {
    padding: '20px',
    textAlign: 'center',
  },

  btn: {
    color: `${globals.primary} !important`,
    fontWeight: 'bold !important',
  },
};
