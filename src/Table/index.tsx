import React from 'react';

import { createUseStyles } from 'react-jss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from './style';

type Props = {
  rows: Array<Array<String>>;
  headers: Array<String>;
  align?: 'left' | 'right';
  theme?: 'darkTheme' | 'mediumTheme' | 'lightTheme';
};

const CustomTable = (props: Props) => {
  const { rows = [[]], headers = [], align = 'left', theme = 'darkTheme' } = props;

  const useStyles = createUseStyles(styles);
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      classes={{
        root: classes[theme],
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map(header => {
              return <TableCell align={align}>{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow>
              {row.map(cell => {
                return <TableCell align={align}>{cell}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
