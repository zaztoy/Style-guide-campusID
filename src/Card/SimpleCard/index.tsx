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
  style: string;
  text: string;
};

export default function SimpleCard(props: Props) {
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();

  const { title, text = '', style = 'darkTheme' } = props;

  const handleClick = () => {
    alert('Button clicked ! :D');
  };

  return (
    <Card classes={{ root: classes[style] }}>
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
}
