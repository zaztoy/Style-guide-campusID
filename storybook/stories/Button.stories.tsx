import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from '@material-ui/core/Button';
import SimpleButton from '../../src/Buttons/Button';
import GroupButton from '../../src/Buttons/GroupButton';

export default {
  title: 'Buttons',
  decorators: [withKnobs]
};


/**
 * Simple button
 */
export const simpleButton = () => {

  const variants = ['contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary'];
  const disable = [true, false];
  const disableRipple = [true, false];
  const sizes = ['small', 'medium', 'large'];

  const selectedVariant = select('Variant', variants, 'outlined');
  const selectedColor = select('Color', colors, 'primary');
  const selectedDisable = select('Disable', disable, false);
  const selectedDisableRippel = select('DisableRipple', disableRipple, false);
  const selectedSize = select('Size', sizes, 'small');

  const onClickButton = () => {
    console.log("I'm a button !!")
  }

  return <SimpleButton
    variant={selectedVariant}
    color={selectedColor}
    disable={selectedDisable}
    size={selectedSize}
    disableRipple={selectedDisableRippel}
    onClick={onClickButton}>
    {text('Text', 'Simple Button')}
  </SimpleButton>;
};


/**
 * Group button
 */
export const groupButton = () => {
  const variants = ['contained', 'outlined', 'text'];
  const colors = ['primary', 'secondary'];
  const sizes = ['small', 'medium', 'large'];
  const disable = [true, false];
  const orientations = ['vertical', 'horizontal'];

  const selectedVariant = select('Variant', variants, 'outlined');
  const selectedColor = select('Color', colors, 'primary');
  const selectedSize = select('Size', sizes, 'small');
  const selectedDisable = select('Disable', disable, false);
  const selectedOrientation = select('Orientation', orientations, 'horizontal');

  return <GroupButton
    variant={selectedVariant}
    color={selectedColor}
    size={selectedSize}
    disable={selectedDisable}
    orientation={selectedOrientation}>
    <Button>{text('Text', 'One')}</Button>
    <Button>{text('Text 2', 'Two')}</Button>
    <Button>{text('Text 3', 'Three')}</Button>
  </GroupButton>
}
