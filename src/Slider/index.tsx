import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import globals from '../Theme/jssGlobals';
import styles from './style';

type Props = {
  value: number | number[];
  onChange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
  min?: number;
  max?: number;
  withValue?: boolean;
};

const Slidebar = (props: Props) => {
  const { withValue, min, max, onChange, value, ...rest } = props;
  const classes = styles();

  return (
    <>
      <div className={classes.container}>
        <Slider
          classes={{
            root: classes.root,
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
