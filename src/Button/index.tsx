import React from "react";
import { createUseStyles } from "react-jss";

import styles from "./style";

const Emoji = () => {

  const useStyles = createUseStyles(styles);
  const classes = useStyles();

  return (
    <span className={classes.test} role="img" aria-label="so cool">
    ET ouiiiii !
    </span>
  );
};

export default Emoji;