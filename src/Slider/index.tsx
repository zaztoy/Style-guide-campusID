import React from 'react';
import { Slider } from '@material-ui/core';
import styles from './style';

type Props = {
  value: number | number[];
  onChange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
  min?: number;
  max?: number;
  withValue?: boolean;
  theme?: 'darkTheme' | 'mediumTheme' | 'lightTheme';
};

const Slidebar = (props: Props) => {
  const { withValue, min, max, onChange, value, theme = 'darkTheme', ...rest } = props;
  const classes = styles();

  return (
    <>
      <div className={classes.container}>
        <Slider
          classes={{
            root: classes.root[theme],
            thumb: classes.thumb,
            valueLabel: classes.valueLabel,
            track: classes.track,
            rail: classes.rail,
          }}
          min={min}
          max={max}
          onChange={onChange}
          valueLabelDisplay="auto"
          defaultValue={0}
          value={value}
          {...rest}
        />
      </div>
      <div className={classes.rangeContainer}>
        {withValue && <span>{min}</span>}
        {withValue && <span>{max}</span>}
      </div>
    </>
  );
};

export default Slidebar;
