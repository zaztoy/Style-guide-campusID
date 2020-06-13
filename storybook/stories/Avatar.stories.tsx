import React from 'react';
import Avatar from '../../src/Avatar';
import Table from '../../src/Table/index';

import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Avatar',
  decorators: [withKnobs],
};

export const AvatarStory = () => {
  const nickname = text('Nickname', 'Bob');
  const mode = select('mode', ['responsive', 'large'], 'responsive');
  const withImage = boolean('With image ?', true);
  const image = text(
    'ImgSrc',
    'https://i.pinimg.com/originals/7b/aa/25/7baa252dbdfeed669c152bedd2fa5feb.jpg'
  );

  return <Avatar src={withImage && image} nickname={nickname} mode={mode} />;
};

const rows = [
  ['nickname:', 'string'],
  ['mode:', 'responsive | large'],
  ['withImage:', 'boolean'],
  ['image:', 'string'],
];

const headers = ['PROPS', 'TYPE'];

export const AvatarProps = () => (
  <>
    <Table rows={rows} headers={headers} align="left" theme="lightTheme" />
  </>
);
