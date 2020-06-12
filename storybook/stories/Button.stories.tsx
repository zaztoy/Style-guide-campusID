import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import SimpleButton from '../../src/Buttons/Button';
import GroupButton from '../../src/Buttons/GroupButton';

export default {
  title: 'Buttons',
  decorators: [withKnobs],
};

export const simpleButton = () => {
  const variants = ['contained', 'outlined', 'text'];
  const colors = ['darkTheme', 'mediumTheme', 'lightTheme'];
  const sizes = ['small', 'medium', 'large'];

  const selectedVariant = select('Variant', variants, 'contained');
  const selectedColor = select('Color', colors, 'darkTheme');
  const selectedDisable = boolean('Disable', false);
  const selectedDisableRippel = boolean('DisableRipple', false);
  const selectedSize = select('Size', sizes, 'small');

  const onClickButton = () => {
    alert("I'm a button !!");
  };

  return (
    <SimpleButton
      variant={selectedVariant}
      theme={selectedColor}
      disable={selectedDisable}
      size={selectedSize}
      disableRipple={selectedDisableRippel}
      onClick={onClickButton}
    >
      {text('Text', 'Simple Button')}
    </SimpleButton>
  );
};

export const groupButton = () => {
  const variants = ['contained', 'outlined', 'text'];
  const colors = ['lightTheme', 'mediumTheme', 'darkTheme'];
  const sizes = ['small', 'medium', 'large'];

  const selectedVariant = select('Variant', variants, 'outlined');
  const selectedSize = select('Size', sizes, 'small');
  const selectedDisable = boolean('Disable', false);
  const selectedColor = select('Color', colors, 'darkTheme');
  const selectedDisableRippel = boolean('DisableRipple', false);

  const onClickButton = () => {
    alert("I'm a button !!");
  };

  return (
    <GroupButton
      variant={selectedVariant}
      color={selectedColor}
      size={selectedSize}
      disable={selectedDisable}
    >
      <SimpleButton
        variant={selectedVariant}
        theme={selectedColor}
        disable={selectedDisable}
        size={selectedSize}
        disableRipple={selectedDisableRippel}
        onClick={onClickButton}
      >
        {text('Text', 'One')}
      </SimpleButton>
      <SimpleButton
        variant={selectedVariant}
        theme={selectedColor}
        disable={selectedDisable}
        size={selectedSize}
        disableRipple={selectedDisableRippel}
        onClick={onClickButton}
      >
        {text('Text 2', 'Two')}
      </SimpleButton>
      <SimpleButton
        variant={selectedVariant}
        theme={selectedColor}
        disable={selectedDisable}
        size={selectedSize}
        disableRipple={selectedDisableRippel}
        onClick={onClickButton}
      >
        {text('Text 3', 'Three')}
      </SimpleButton>
    </GroupButton>
  );
};
