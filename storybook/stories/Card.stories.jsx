import React from 'react';
import ImageCard from '../../src/Card/ImageCard';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Card',
  decorators: [withKnobs],
};

export const imageCard = () => {
  const styles = ['darkTheme', 'mediumTheme', 'lightTheme'];

  return (
    <ImageCard
      image={text(
        'Image Url',
        'http://www.campusid.fr/wp-content/uploads/2018/02/logo-carre-2.png'
      )}
      title={text('Title', 'CampusID')}
      style={select('style', styles)}
    />
  );
};
