const jssGlobals = {};

jssGlobals.font = '"Roboto", "Helvetica", "Arial", sans-serif';
jssGlobals.pageBackground = '#f5f5f3';
jssGlobals.linkColor = '#0096d8';
jssGlobals.primary = 'red'; //To be changed

jssGlobals.breakpoints = {
  values: {
    xs: 360,
    sm: 600,
    md: 960,
    lg: 1200,
    xl: 1920,
  },
};

jssGlobals.breakpoints.media = {
  xsMax: `@media (max-width: ${jssGlobals.breakpoints.values.xs - 1}px)`,
  xsMin: `@media (min-width: ${jssGlobals.breakpoints.values.xs}px)`,
  smMax: `@media (max-width: ${jssGlobals.breakpoints.values.sm - 1}px)`,
  smMin: `@media (min-width: ${jssGlobals.breakpoints.values.sm}px)`,
  mdMax: `@media (max-width: ${jssGlobals.breakpoints.values.md - 1}px)`,
  mdMin: `@media (min-width: ${jssGlobals.breakpoints.values.md}px)`,
  lgMax: `@media (max-width: ${jssGlobals.breakpoints.values.lg - 1}px)`,
  lgMin: `@media (min-width: ${jssGlobals.breakpoints.values.lg}px)`,
  xlMax: `@media (max-width: ${jssGlobals.breakpoints.values.xl - 1}px)`,
  xlMin: `@media (min-width: ${jssGlobals.breakpoints.values.xl}px)`,
};

jssGlobals.spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

//

jssGlobals.fonts = {
  title3: {
    fontSize: 20,
  },
  title2: {
    fontSize: 24,
  },
  title: {
    fontSize: 34,
  },
  subheading: {
    fontSize: 16,
  },
  body: {
    fontSize: 14,
  },
  body2: {
    fontSize: 12,
  },

  caption: {
    fontSize: 12,
  },
  button: {
    fontSize: 14,
  },
};
jssGlobals.borderRadius = {
  sm: '5px',
};
jssGlobals.typographyUX = {
  default: {
    component: 'p',
    fontWeight: '400',
    lineHeight: '1.35em',
    fontFamily: jssGlobals.font,
    color: jssGlobals.grey900,
    textAlign: 'inherit',
    /* Browser reset */
    margin: 0,
    padding: 0,
  },
  display1: {
    component: 'h1',
    fontSize: 34,
  },
  display2: {
    component: 'h2',
    fontSize: 28,
  },
  display3: {
    component: 'h3',
    fontSize: 24,
    fontWeight: 500,
  },
  display4: {
    component: 'h4',
    fontSize: 20,
    fontWeight: 500,
  },
  display5: {
    component: 'h4',
    fontSize: 16,
    fontWeight: 500,
  },
  body1: {
    fontSize: 15,
    fontWeight: 500,
  },
  body2: {
    fontSize: 14,
    fontWeight: 500,
  },
  body3: {
    fontSize: 15,
  },
  body4: {
    fontSize: 14,
  },
  body5: {
    fontSize: 13,
    color: jssGlobals.grey600,
  },
  body6: {
    fontSize: 12,
    color: jssGlobals.grey600,
  },
};

export default jssGlobals;
