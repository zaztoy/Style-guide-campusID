import React from 'react';
import Avatar from '../../src/Avatar';

import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Avatar',
  decorators: [withKnobs],
};

export const FileUploaderStory = () => {
  const nickname = text('Nickname', 'Bob');

  const mode = select('mode', ['responsive', 'large'], 'responsive');

  const withImage = boolean('With image ?', true);

  const image = text(
    'ImgSrc',
    'https://i.pinimg.com/originals/7b/aa/25/7baa252dbdfeed669c152bedd2fa5feb.jpg'
  );

  return <Avatar src={withImage && image} nickname={nickname} mode={mode} />;
};
