import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import { Input, InputLabel, FormHelperText } from '@material-ui/core';

import styles from './style';

type Props = {
  onChange?: (value: string, isValid: boolean) => any;
  onError?: (value: string) => any;
  onSuccess?: (value: string) => any;
  lowerBound?: number;
  upperBound?: number;
  isInteger?: boolean;
  placeholder?: string;
  label?: string;
  theme?: 'darkTheme' | 'mediumTheme' | 'lightTheme';
  id?: string;
};

const NumberInput = (props: Props) => {
  const {
    onError = () => {},
    onSuccess = () => {},
    onChange = () => {},
    lowerBound,
    upperBound,
    isInteger = false,
    theme = 'darkTheme',
    label = 'Number',
    placeholder = 'Veuillez saisir un nombre',
    id = 'numberInputR' + Math.random() * 100,
  } = props;

  const useStyles = createUseStyles(styles);
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const onInternalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newVal = Number(event.target.value);

    let isValid = true;

    if (typeof lowerBound !== 'undefined' && newVal < lowerBound) {
      isValid = false;
    }

    if (typeof upperBound !== 'undefined' && newVal > upperBound) {
      isValid = false;
    }

    if (isInteger && newVal) {
      newVal = Math.trunc(newVal);
    }

    if (!isValid) {
      onError(newVal.toString());
    } else {
      onSuccess(newVal.toString());
    }
    onChange(newVal.toString(), isValid);

    setInputValue(newVal.toString());
    setIsValid(isValid);
  };

  return (
    <div>
      <InputLabel
        classes={{
          root: classes[theme],
        }}
        htmlFor={id}
        shrink={true}
      >
        {label}
      </InputLabel>
      <Input
        classes={{
          root: classes[theme],
        }}
        id={id}
        type="number"
        error={!isValid}
        onChange={onInternalChange}
        placeholder={placeholder}
        value={inputValue}
      />
      {isValid ? (
        ''
      ) : (
        <FormHelperText style={{ color: 'red' }}>
          La valeur saisie doit être entre {lowerBound} et {upperBound}.
        </FormHelperText>
      )}
    </div>
  );
};

export default NumberInput;
