import React from 'react';
import ImageCard from '../../src/Card/ImageCard';
import SimpleCard from '../../src/Card/SimpleCard';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  Props,
  Stories,
} from '@storybook/addon-docs/blocks';

export default {
  title: 'Card',
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Props />
          <Stories />
        </>
      ),
    },
  },
};

export const defDocsPage = () => (
  <>
    <div>Une CARD est un composant qui sert à afficher des informations.</div>
    <hr />
    <br />
    <h2> Composant 'Image Card' : </h2>
    <h4>PROPS</h4>
    <ul>
      <li>
        Title : <i>string</i>
      </li>
      <li>
        Style : <i>Enum ['darkTheme', 'mediumTheme', 'lightTheme']</i>
      </li>
      <li>
        Title : <i>string</i>
      </li>
      <li>
        Text : <i>string</i>
      </li>
      <li>
        Image : <i>string</i>
      </li>
    </ul>
  </>
);

export const imageCard = () => {
  const styles = ['darkTheme', 'mediumTheme', 'lightTheme'];

  return (
    <ImageCard
      image={text(
        'Image Url',
        'http://www.campusid.fr/wp-content/uploads/2018/02/logo-carre-2.png'
      )}
      title={text('Title', 'CampusID')}
      style={select('Style', styles)}
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
