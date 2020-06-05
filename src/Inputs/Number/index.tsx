import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import {Input, InputLabel, FormHelperText} from '@material-ui/core';

import styles from "./style";

type Props = {
    onChange?: (value: string, isValid: boolean) => any,
    onError?: (value: string) => any,
    onSuccess?: (value: string) => any,
    lowerBound?: number,
    upperBound?: number,
    isInteger?: boolean,
    placeholder?: string,
    label?: string,
    style?: string,
    id?: string
}

const numberInput = (props: Props) => {
    const {
        onError = () => {},
        onSuccess = () => {},
        onChange = () => {},
        lowerBound,
        upperBound,
        isInteger = false,
        style = 'darkTheme', 
        label = 'Number', 
        placeholder = 'Veuillez saisir un nombre',
        id = "numberInputR" + Math.random()*100
    } = props;

    const useStyles = createUseStyles(styles);
    const classes = useStyles();

    const [ inputValue, setInputValue ] = useState("");
    const [ isValid, setIsValid ] = useState(true);

    const onInternalChange = (evt) => {
        let newVal = evt.target.value;

        let isValid = true;

        if(typeof lowerBound !== "undefined"
            && newVal < lowerBound) {
            isValid = false;
        }

        if(typeof upperBound !== "undefined"
            && newVal > upperBound) {
            isValid = false;
        }

        if(isInteger) {
            newVal = Math.floor(newVal)
        }

        if(!isValid) {
            onError(newVal);
        } else {
            onSuccess(newVal);
        }
        onChange(newVal, isValid);
        
        setInputValue(newVal)
        setIsValid(isValid)
    } 

    const debounce =  (fn: (ev: any) => any) => {
        let _timeout;
    
        return ev => {
          if (_timeout !== null) {
            clearTimeout(_timeout);
          }
    
          ev.persist();
    
          _timeout = setTimeout(() => {
            clearTimeout(_timeout);
            fn(ev);
          }, 500);
        };
      };

    return (
        <div>
            <InputLabel
                classes={{
                    root: classes[style]
                }}
                htmlFor={id}
                shrink={true}
            >{label}</InputLabel>
            <Input 
                classes={{
                    root: classes[style]
                }}
                id={id}
                type="number"
                error={!isValid}
                onChange={debounce(onInternalChange)}
                placeholder={placeholder}
                value={inputValue}
            />
            {
                isValid? '': <FormHelperText style={{color: 'red'}}>La valeur saisie doit être entre {lowerBound} et {upperBound}.</FormHelperText>
            }
        </div>
        
    )
}

export default numberInput;