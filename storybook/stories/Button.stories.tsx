import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import SimpleButton from '../../src/Buttons/Button';
import GroupButton from '../../src/Buttons/GroupButton';

export default {
  title: 'Buttons',
  decorators: [withKnobs],
};

export const simpleButton = () => {
  const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');
  const size = select('Size', ['small', 'medium', 'large'], 'medium');

  const variant = select('Variant', ['contained', 'outlined', 'text'], 'contained');
  const disabled = boolean('Disabled', false);
  const disableRipple = boolean('DisableRipple', false);

  const onClick = () => {
    alert("I'm a button !!");
  };

  return (
    <SimpleButton
      variant={variant}
      theme={theme}
      disabled={disabled}
      size={size}
      disableRipple={disableRipple}
      onClick={onClick}
    >
      {text('Text', 'Simple Button')}
    </SimpleButton>
  );
};

export const groupButton = () => {
  const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');
  const size = select('Size', ['small', 'medium', 'large'], 'medium');
  const variant = select('Variant', ['contained', 'outlined', 'text'], 'contained');
  const disabled = boolean('Disabled', false);
  const disableRipple = boolean('DisableRipple', false);

  const onClick = () => {
    alert("I'm a button !!");
  };

  return (
    <GroupButton variant={variant} theme={theme} size={size} disabled={disabled}>
      <SimpleButton
        variant={variant}
        theme={theme}
        disabled={disabled}
        size={size}
        disableRipple={disableRipple}
        onClick={onClick}
      >
        {text('Text', 'One')}
      </SimpleButton>
      <SimpleButton
        variant={variant}
        theme={theme}
        disabled={disabled}
        size={size}
        disableRipple={disableRipple}
        onClick={onClick}
      >
        {text('Text 2', 'Two')}
      </SimpleButton>
      <SimpleButton
        variant={variant}
        theme={theme}
        disabled={disabled}
        size={size}
        disableRipple={disableRipple}
        onClick={onClick}
      >
        {text('Text 3', 'Three')}
      </SimpleButton>
    </GroupButton>
  );
};
