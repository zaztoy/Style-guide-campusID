import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import { createUseStyles } from 'react-jss';
import styles from './style';

type Props = {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  style1: string;
  style2: string;
};

export default function SelectedListItem(props: Props) {
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();

  const { title1, title2, title3, title4, style1 = 'darkTheme', style2 = 'lightTheme' } = props;

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders" classes={{ root: classes[style1] }}>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <CastForEducationIcon />
          </ListItemIcon>
          <ListItemText primary={title1} />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={title2} />
        </ListItem>
      </List>
      <Divider />
      <List
        component="nav"
        aria-label="secondary mailbox folder"
        classes={{ root: classes[style2] }}
      >
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemText primary={title3} />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={event => handleListItemClick(event, 3)}
        >
          <ListItemText primary={title4} />
        </ListItem>
      </List>
    </div>
  );
}
