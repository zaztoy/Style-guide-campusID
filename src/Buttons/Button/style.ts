import globals from '../../Theme/jssGlobals';

export default {
  darkThemeOutlinedDisable: {
  },

  darkThemeContainedDisable: {
  },

  darkThemeTextDisable: {
  },

  darkThemeOutlinedNotDisable: {
    border: `solid 1px ${globals.backgroundColor.darkTheme} !important`,
    color: `${globals.backgroundColor.darkTheme} !important`
  },

  darkThemeContainedNotDisable: {
    backgroundColor: `${globals.backgroundColor.darkTheme} !important`,
    color: `${globals.color.darkTheme} !important`
  },

  darkThemeTextNotDisable: {
    color: `${globals.backgroundColor.darkTheme} !important`
  },

  mediumThemeOutlinedDisable: {
  },

  mediumThemeContainedDisable: {
  },

  mediumThemeTextDisable: {
  },

  mediumThemeOutlinedNotDisable: {
    border: `solid 1px ${globals.backgroundColor.mediumTheme} !important`,
    color: `${globals.primary} !important`
  },

  mediumThemeContainedNotDisable: {
    backgroundColor: `${globals.backgroundColor.darkTheme} !important`,
    color: `${globals.primary} !important`
  },

  mediumThemeTextNotDisable: {
    color: `${globals.primary} !important`
  },

  lightThemeOutlinedDisable: {
  },

  lightThemeContainedDisable: {
  },

  lightThemeTextDisable: {
  },

  lightThemeOutlinedNotDisable: {
    border: `solid 1px ${globals.backgroundColor.lightTheme} !important`,
    color: `${globals.backgroundColor.darkTheme} !important`
  },

  lightThemeContainedNotDisable: {
    backgroundColor: `${globals.backgroundColor.lightTheme} !important`,
    color: `${globals.backgroundColor.darkTheme} !important`
  },

  lightThemeTextNotDisable: {
    color: `${globals.backgroundColor.darkTheme} !important`
  }

};
