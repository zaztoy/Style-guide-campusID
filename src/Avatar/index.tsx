import React from 'react';
import { Avatar as MUIAvatar } from '@material-ui/core';

import styles from './style';

type Props = {
  src: string;
  nickname: string;
  mode?: 'responsive' | 'large';
};
const Avatar = ({ src, nickname, mode = 'responsive' }: Props) => {
  const classes = styles();
  return (
    <MUIAvatar
      src={src}
      classes={{ root: mode === 'responsive' ? classes.responsive : classes.large }}
      alt={nickname}
    >
      {nickname.length > 0 && nickname[0].toUpperCase()}
    </MUIAvatar>
  );
};

export default Avatar;
