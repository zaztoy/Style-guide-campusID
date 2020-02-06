import React from 'react';
import ImageCard from '../../src/Card/ImageCard';
import SimpleCard from '../../src/Card/SimpleCard';
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
      text={text('Text', 'You can put some text if you need')}
    />
  );
};

export const simpleCard = () => {
  const styles = ['darkTheme', 'mediumTheme', 'lightTheme'];

  return (
    <SimpleCard
      title={text('Title', 'CampusID')}
      style={select('style', styles)}
      text={text(
        'Text',
        'Oui alors écoute moi, premièrement, il faut se recréer... pour recréer... a better you et cette officialité peut vraiment retarder ce qui devrait devenir... Et là, vraiment, j essaie de tout coeur de donner la plus belle réponse de la terre ! '
      )}
    />
  );
};
