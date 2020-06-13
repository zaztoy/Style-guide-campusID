import React from 'react';
import { Typography } from '@material-ui/core';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Table from '../../src/Table/index';

export default {
  title: 'Typography',
  decorators: [withKnobs],
};

export const TypographyStory = () => {
  const variants = select(
    'variant',
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2'],
    'h1'
  );

  const align = select('align', ['inherit', 'left', 'center', 'right', 'justify'], 'inherit');
  const color = select(
    'color',
    ['inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'],
    'primary'
  );

  return (
    <div>
      <Typography variant="h1" align={align} color={color}>
        Variant H1
      </Typography>
      <Typography variant="h2" align={align} color={color}>
        Variant H2
      </Typography>
      <Typography variant="h3" align={align} color={color}>
        Variant H3
      </Typography>
      <Typography variant="h4" align={align} color={color}>
        Variant H4
      </Typography>
      <Typography variant="h5" align={align} color={color}>
        Variant H5
      </Typography>
      <Typography variant="h6" align={align} color={color}>
        Variant H6
      </Typography>
      <Typography variant="subtitle1" align={align} color={color}>
        Subtitle 1
      </Typography>
      <Typography variant="subtitle2" align={align} color={color}>
        Subtitle 2
      </Typography>
      <Typography variant="body1" align={align} color={color}>
        Body 1
      </Typography>
      <Typography variant="body2" align={align} color={color}>
        Body 2
      </Typography>
      <div style={{ marginTop: 20 }}>
        <Typography variant={variants} align={align} color={color}>
          {text('children', 'Try me !')}
        </Typography>
      </div>
    </div>
  );
};

const rows = [
  ['theme:', 'darkTheme | mediumTheme | lightTheme'],
  ['align:', 'inherit | left | center | right | justify'],
  ['variant:', 'h1 | h2 | h3 | h4 | h5 | h6 | subtitle1 | subtitle2 | body1 | body2'],
];

const headers = ['PROPS', 'TYPE'];

export const typographyProps = () => (
  <>
    <Table rows={rows} headers={headers} align="left" theme="lightTheme" />
  </>
);
