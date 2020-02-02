import TextField from "@material-ui/core/TextField";
import React from "react";
import {DatePicker, TimePicker} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export const renderTextField = (
    {
        input,
        label,
        meta: {touched, error},
        ...custom
    }
) => <TextField
    // hintText={label}
    // floatingLabelText={label}
    label={label}
    helperText={touched && error}
    {...input}
    {...custom}
    error={touched && !!error}
    fullWidth
/>


export const renderDateField = (
    {
        input,
        label,
        meta: {touched, error},
        ...custom
    }
) =>
    <DatePicker
        format={'dd/MM/yyyy'}
        helperText={touched && error}
        {...input}
        {...custom}
        label={label}
        error={touched && !!error}
        fullWidth

    />
export const renderTimeField = (
    {
        input,
        label,
        meta: {touched, error},
        ...custom
    }
) =>
    <TimePicker
        // format={'dd/MM/yyyy'}
        helperText={touched && error}
        {...input}
        {...custom}
        label={label}
        error={touched && !!error}
        fullWidth

    />
