import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import TextField from '@material-ui/core/TextField';

import styles from './style';

type Props = {
  onChange?: (value: string, isValid: boolean) => any;
  onError?: (value: string) => any;
  onSuccess?: (value: string) => any;
  placeholder?: string;
  label?: string;
  theme?: 'darkTheme' | 'mediumTheme' | 'lightTheme';
  debounceTime?: number;
};

const MailInput = (props: Props) => {
  const useStyles = createUseStyles(styles);
  const classes = useStyles();

  const verifRegex = /^[a-zA-Z0-9]+?(\.[a-zA-Z0-9]+?)?@[a-zA-Z0-9]+?\.[a-zA-Z0-9]+?$/;

  const defaultErrorText = 'Adresse mail invalide';

  const [err, setErr] = useState(false);
  const [helperText, setHelperText] = useState('');

  // Get the style from the props
  const {
    theme = 'darkTheme',
    label = 'Mail',
    placeholder = 'Entrez votre adresse mail',
    onError = () => {},
    onSuccess = () => {},
    onChange = () => {},
    debounceTime = 250,
  } = props;

  const onInternalChange = ev => {
    let value = ev.target.value;

    let isError = !verifRegex.test(value);

    if (isError) {
      onError(value);
    } else if (value >= '') {
      onSuccess(value);
    }

    onChange(value, !isError);

    setErr(isError);
    setHelperText(isError ? defaultErrorText : '');
  };

  const debounce = (fn: (ev: any) => any) => {
    let _timeout;

    return ev => {
      if (_timeout !== null) {
        clearTimeout(_timeout);
      }

      ev.persist();

      _timeout = setTimeout(() => {
        clearTimeout(_timeout);
        fn(ev);
      }, debounceTime);
    };
  };

  const field = (
    <TextField
      classes={{
        root: classes[theme],
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

export default MailInput;
