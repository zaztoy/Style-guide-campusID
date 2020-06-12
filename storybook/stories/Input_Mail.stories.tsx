import React from 'react';

import { withKnobs, text, select, number } from '@storybook/addon-knobs';

import MailInput from '../../src/Inputs/Mail';
export default {
  title: 'Mail Inputs',
  decorator: [withKnobs],
};

export const AllPropsMailInput = () => {
  const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

  const onChange = (inputValue, isValid) => {
    // Do some stuff here
  };

  const onSuccess = inputValue => {
    // Do some stuff here
  };

  const onError = inputValue => {
    // Do some stuff here
  };

  return (
    <MailInput
      onChange={onChange}
      onSuccess={onSuccess}
      onError={onError}
      theme={theme}
      label={text('label', 'This is a label')}
      placeholder={text('placeholder', 'This is a placeholder')}
      debounceTime={number('Debounce time', 500)}
    />
  );
};
