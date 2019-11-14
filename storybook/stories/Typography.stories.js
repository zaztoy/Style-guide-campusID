import React from 'react';
import { Typography } from '@material-ui/core';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

export default {
  title: 'Typography',
  decorators: [withKnobs],
};

export const TypographyStory = () => {
  const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2'];

  const aligns = ['inherit', 'left', 'center', 'right', 'justify'];

  const colors = ['inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'];

  const selectedAlign = select('align', aligns);
  const selectedColor = select('color', colors);

  return (
    <div>
      <Typography variant="h1" align={selectedAlign} color={selectedColor}>
        Variant H1
      </Typography>
      <Typography variant="h2" align={selectedAlign} color={selectedColor}>
        Variant H2
      </Typography>
      <Typography variant="h3" align={selectedAlign} color={selectedColor}>
        Variant H3
      </Typography>
      <Typography variant="h4" align={selectedAlign} color={selectedColor}>
        Variant H4
      </Typography>
      <Typography variant="h5" align={selectedAlign} color={selectedColor}>
        Variant H5
      </Typography>
      <Typography variant="h6" align={selectedAlign} color={selectedColor}>
        Variant H6
      </Typography>
      <Typography variant="subtitle1" align={selectedAlign} color={selectedColor}>
        Subtitle 1
      </Typography>
      <Typography variant="subtitle2" align={selectedAlign} color={selectedColor}>
        Subtitle 2
      </Typography>
      <Typography variant="body1" align={selectedAlign} color={selectedColor}>
        Body 1
      </Typography>
      <Typography variant="body2" align={selectedAlign} color={selectedColor}>
        Body 2
      </Typography>

      <Typography variant={select('variant', variants)} align={selectedAlign} color={selectedColor}>
        {text('children', 'Commencez à écrire quelque chose !')}
      </Typography>
    </div>
  );
};
