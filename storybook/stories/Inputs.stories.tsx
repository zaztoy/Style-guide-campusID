import React from 'react';
import NumberInput from '../../src/Inputs/Number';
import MailInput from '../../src/Inputs/Mail';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs';

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .add('Number Input', () => {
    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <NumberInput
        onChange={() => alert('Changed')}
        onSuccess={() => alert('Success')}
        onError={() => alert('Error')}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
      />
    );
  })
  .add('Bounded Number Input', () => {
    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <NumberInput
        onChange={() => alert('Changed')}
        onSuccess={() => alert('Success')}
        onError={() => alert('Error')}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
        upperBound={number('upper bound', 100)}
        lowerBound={number('lower bound', 0)}
      />
    );
  })
  .add('Integer Number Input', () => {
    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <NumberInput
        onChange={() => alert('Changed')}
        onSuccess={() => alert('Success')}
        onError={() => alert('Error')}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
        isInteger={boolean('force integer values', true)}
      />
    );
  })
  .add('Mail Input', () => {
    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <MailInput
        onChange={() => alert('Changed')}
        onSuccess={() => alert('Success')}
        onError={() => alert('Error')}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
        debounceTime={number('Debounce time', 500)}
      />
    );
  });
