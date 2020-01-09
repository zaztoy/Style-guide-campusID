import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createUseStyles } from 'react-jss';
import styles from './style';

type Props = {
  title: any;
  style: string;
  image: any;
};

export default function SimpleCard(props: Props) {
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();

  const { image, title, style = 'darkTheme' } = props;
  console.table(image);

  return (
    <Card classes={{ root: classes[style] }}>
      <CardContent>
        <Typography variant="h3">{title}</Typography>
      </CardContent>
      <div>
        <img src={image}></img>
      </div>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
