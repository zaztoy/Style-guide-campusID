import React from 'react';
import { createUseStyles } from 'react-jss';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

import styles from './style';

type Props = {
  progressType: 'circular' | 'linear';
  progressColor?: 'darkTheme' | 'lightTheme' | 'mediumTheme';
  variant?: any;
  className?: Record<string, string>;
  otherProps?: {};
};

const Progress = (props: Props) => {
  const { progressType, progressColor = 'darkTheme', variant } = props;
  const linearStyle = createUseStyles(styles.linear);
  const circularStyle = createUseStyles(styles.circular);
  const linearClasses = linearStyle();
  const circularClasses = circularStyle();

  return (
    <div>
      {progressType === 'circular' && (
        <CircularProgress variant={variant} classes={{ svg: circularClasses[progressColor] }} />
      )}
      {progressType === 'linear' && (
        <LinearProgress variant={variant} classes={{ bar: linearClasses[progressColor] }} />
      )}
    </div>
  );
};

export default Progress;
