import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import {Input, InputLabel} from '@material-ui/core';

import styles from "./style";

type Props = {
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

    const onChange = (evt) => {
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

        setInputValue(newVal)
        setIsValid(isValid)
        
    } 

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
                onChange={onChange}
                placeholder={placeholder}
                value={inputValue}
            />
        </div>
        
    )
}

export default numberInput;