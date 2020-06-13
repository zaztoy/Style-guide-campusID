import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Table from '../../src/Table';

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .add('Rows From Array', () => {
    const headers = ['Nom', 'Prénom', 'Nationalité', 'Vrai Nationalité'];

    const rows = [
      ['Patey', 'Mathieu', 'Français', 'Français'],
      ['Lenard', 'Maélie', 'Hawaïenne', 'Français'],
      ['Vermeulen', 'Jan', 'Suisse', 'Français'],
      ['Roux', 'Nicolas', 'Irlandais', 'Français'],
    ];

    return (
      <Table
        rows={rows}
        headers={headers}
        theme={select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme')}
        align={select('Alignement des cellules', ['left', 'right'], 'left')}
      />
    );
  })
  .add('Table Props', () => {
    const rowsDoc = [
      ['row:', 'string[][]'],
      ['headersDoc:', 'string[]'],
      ['theme:', 'darkTheme | mediumTheme | lightTheme'],
      ['align:', 'right | left'],
    ];

    const headersDoc = ['PROPS', 'TYPE'];
    return (
      <>
        <Table rows={rowsDoc} headers={headersDoc} align="left" theme="lightTheme" />
      </>
    );
  });
