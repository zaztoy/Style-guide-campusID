import React from 'react';
import ImageCard from '../../src/Card/ImageCard';
import SimpleCard from '../../src/Card/SimpleCard';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Table from '../../src/Table/index';

export default {
  title: 'Cards Docs',
  decorators: [withKnobs],
};

export const ImageCardStory = () => {
  const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

  return (
    <ImageCard
      image={text(
        'Image Url',
        'http://www.campusid.fr/wp-content/uploads/2018/02/logo-carre-2.png'
      )}
      title={text('Title', 'CampusID')}
      theme={theme}
      text={text('Text', 'You can put some text if you need')}
    />
  );
};

const rows = [
  ['image:', 'string'],
  ['title:', 'string'],
  ['theme:', 'darkTheme | mediumTheme | lightTheme'],
  ['text:', 'string'],
];
const headers = ['PROPS', 'TYPE'];

export const ImageCardProps = () => (
  <>
    <Table rows={rows} headers={headers} align="left" theme="lightTheme" />
  </>
);

export const SimpleCardStory = () => {
  const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

  return (
    <SimpleCard
      title={text('Title', 'CampusID')}
      theme={theme}
      text={text(
        'Text',
        'Oui alors écoute moi, premièrement, il faut se recréer... pour recréer... a better you et cette officialité peut vraiment retarder ce qui devrait devenir... Et là, vraiment, j essaie de tout coeur de donner la plus belle réponse de la terre ! '
      )}
    />
  );
};

const rows2 = [
  ['title', 'string'],
  ['theme', 'darkTheme | mediumTheme | lightTheme'],
  ['text', 'string'],
];

export const SimpleCardProps = () => (
  <>
    <Table rows={rows2} headers={headers} align="left" theme="lightTheme" />
  </>
);
