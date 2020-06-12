import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Table from '../../src/Table';

const styles = ['darkTheme', 'mediumTheme', 'lightTheme'];
const alignPossibilities = ['left', 'right'];

storiesOf('Table', module)
.addDecorator(withKnobs)
.add( 'Rows From Array', () => {

  const headers = [
    'Nom',
    'Prénom',
    'Nationalité',
    'Vrai Nationalité'
  ]
  const rows= [
    ['Patey', 'Mathieu', 'Français', 'Français'],
    ['Lenard', 'Maélie', 'Hawaïenne', 'Français'],
    ['Vermeulen', 'Jan', 'Suisse', 'Français'],
    ['Roux', 'Nicolas', 'Irlandais', 'Français']
  ]

  
  return (
    <Table 
      rows={rows} 
      headers={headers}
      style={select('Style', styles)}
      align={select('Alignement des cellules', alignPossibilities)}
    />
  )

})