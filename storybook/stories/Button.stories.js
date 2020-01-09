import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import SimpleButton from '../../src/Button';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

//export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const simpleButton = () => {
  const variants = ['default', 'inherit', 'contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary'];
  const disable = [true, false];
  const sizes = ['small', 'medium', 'large'];

  const selectedVariant = select('Variant', variants);
  const selectedColor = select('Color', colors);
  const selectedDisable = select('Disable', disable);
  const selectedSize = select('Size', sizes);

  return <SimpleButton variant={selectedVariant} color={selectedColor} disable={selectedDisable} size={selectedSize}> {text('Text', 'Simple Button')}</SimpleButton>;
};
