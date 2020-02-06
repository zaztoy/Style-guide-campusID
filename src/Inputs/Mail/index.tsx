import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import TextField from '@material-ui/core/TextField';

import styles from "./style";


type Props = {
  onChange: (value: string, isValid: boolean) => any,
  onError: (value: string) => any,
  onSuccess: (value: string) => any,
  placeholder: string,
  label: string,
  style: string,
  debounceTime: number
}

function mailInput(props: Props) {

  const useStyles = createUseStyles(styles);
  const classes = useStyles();


  const verifRegex = /^[a-zA-Z0-9]+?(\.[a-zA-Z0-9]+?)?@[a-zA-Z0-9]+?\.[a-zA-Z0-9]+?$/;

  const defaultErrorText = 'Adresse mail invalide';

  const [err, setErr] = useState(false);
  const [helperText, setHelperText] = useState('');

  // Default debounce time set to 250ms
  let debounceTime = 250;

  if(typeof props.debounceTime !== 'undefined'
    && props.debounceTime >= 0) {
      debounceTime = props.debounceTime;
  }


  // Get the style from the props
  const {
    style = 'darkTheme', 
    label = 'Mail', 
    placeholder = 'Entrez votre adresse mail',
    onError = () => {},
    onSuccess = () => {}
  } = props;

  const onInternalChange = ev => {

    let value = ev.target.value;

    let isError = !verifRegex.test(value);

    if(isError) {
      onError(value);
    } else if (value >= ""){
      onSuccess(value);
    }

    if(typeof props.onChange === 'function') {
      props.onChange(value, !isError);
    }

    setErr(isError);
    setHelperText(isError ? defaultErrorText : '');
  };

  function debounce (fn: (ev: any) => any) {
    let _interval;

    return ev => {
      if (_interval !== null) {
        clearInterval(_interval);
      }

      ev.persist();

      _interval = setInterval(() => {
        clearInterval(_interval);
        fn(ev);
      }, debounceTime);
    };
  };

  const field = (
    <TextField
      classes={{
        root: classes[style]
      }}
      error={err}
      onChange={debounce(onInternalChange)}
      helperText={helperText}
      label={label}
      placeholder={placeholder}
      InputLabelProps={{
        shrink: true,
      }}
    ></TextField>
  );

  return field;
};

export default mailInput;
