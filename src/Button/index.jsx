import React from 'react';
import Button from '@material-ui/core/Button';

const SimpleButton = props => {
  return (
    <Button variant={props.variant} color={props.color} disabled={props.disable} size={props.size}>
      {props.children}
    </Button>
  );
};

export default SimpleButton;
