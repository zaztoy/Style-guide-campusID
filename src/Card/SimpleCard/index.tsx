import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createUseStyles } from 'react-jss';
import styles from './style';

type Props = {
  title: string;
  theme?: 'darkTheme' | 'mediumTheme' | 'lightTheme';
  text: string;
};

const SimpleCard = (props: Props) => {
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();

  const { title, text = '', theme = 'darkTheme' } = props;

  const handleClick = () => {
    alert('Button clicked ! :D');
  };

  return (
    <Card classes={{ root: classes[theme] }}>
      <CardContent>
        <Typography variant="h3">{title}</Typography>
      </CardContent>
      <hr className={classes.hrStyle} />
      <div className={classes.containerText}>{text}</div>
      <CardActions>
        <Button classes={{ root: classes.btn }} size="small" onClick={handleClick}>
          Click here
        </Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
