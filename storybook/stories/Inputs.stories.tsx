import React from 'react';
import NumberInput from '../../src/Inputs/Number';
import MailInput from '../../src/Inputs/Mail';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs';

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .add('Number Input', () => {
    const onChange = (inputValue, isValid) => {
      // Do some stuff here
    };

    const onSuccess = inputValue => {
      // Do some stuff here
    };

    const onError = inputValue => {
      // Do some stuff here
    };

    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <NumberInput
        onChange={onChange}
        onSuccess={onSuccess}
        onError={onError}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
      />
    );
  })
  .add('Bounded Number Input', () => {
    const onChange = (inputValue, isValid) => {
      // Do some stuff here
    };

    const onSuccess = inputValue => {
      // Do some stuff here
    };

    const onError = inputValue => {
      // Do some stuff here
    };

    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <NumberInput
        onChange={onChange}
        onSuccess={onSuccess}
        onError={onError}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
        upperBound={number('upper bound', 100)}
        lowerBound={number('lower bound', 0)}
      />
    );
  })
  .add('Integer Number Input', () => {
    const onChange = (inputValue, isValid) => {
      // Do some stuff here
    };

    const onSuccess = inputValue => {
      // Do some stuff here
    };

    const onError = inputValue => {
      // Do some stuff here
    };

    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <NumberInput
        onChange={onChange}
        onSuccess={onSuccess}
        onError={onError}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
        isInteger={boolean('force integer values', true)}
      />
    );
  })
  .add('Mail Input', () => {
    const onChange = (inputValue, isValid) => {
      // Do some stuff here
    };

    const onSuccess = inputValue => {
      // Do some stuff here
    };

    const onError = inputValue => {
      // Do some stuff here
    };

    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

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
  });
