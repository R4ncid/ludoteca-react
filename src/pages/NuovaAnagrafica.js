import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from '@date-io/date-fns';
import itLocale from "date-fns/locale/it"
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker, DatePicker,
} from '@material-ui/pickers';
import {Container} from "@material-ui/core";

const handleDateChange = setter => d => setter(d)


export default props => {
    const today = new Date();

    const [nome, setNome] = useState('')
    const [cognome, setCognome] = useState('')
    const [dataDiNascita, setDataDiNascita] = useState(today)
    const [dataDiIscrizione, setDataIscrizione] = useState(today)

    return <MuiPickersUtilsProvider utils={DateFnsUtils} locale={itLocale}>
        <Container style={{marginTop:'70px'}}>
            <Grid alignItems={"center"} container justify={"space-around"} spacing={3}>

                <Grid item xs={12} md={6}>
                <TextField
                    required
                    fullWidth
                    id="nome"
                    label="Nome"
                    name="nome"
                    value={nome}
                    autoComplete="nome"
                    onChange={e => {
                        setNome(e.nativeEvent.target.value)
                    }}
                    autoFocus
                /></Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    required
                    fullWidth
                    id="cognome"
                    label="Cognome"
                    name="cognome"
                    value={cognome}
                    autoComplete="cognome"
                    onChange={e => {
                        setCognome(e.nativeEvent.target.value)
                    }}
                />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePicker value={dataDiNascita} onChange={handleDateChange(setDataDiNascita)}  format={'dd/MM/yyyy'} name={'dataDiNascita'} required fullWidth label={'Data di nascita'} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <DatePicker value={dataDiIscrizione} onChange={handleDateChange(setDataIscrizione)}  format={'dd/MM/yyyy'} name={'dataDiIscrizione'} required fullWidth label={'Data di iscrizione'} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        fullWidth
                        id="cognome"
                        label="Cognome"
                        name="cognome"
                        value={cognome}
                        autoComplete="cognome"
                        onChange={e => {
                            setCognome(e.nativeEvent.target.value)
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    </MuiPickersUtilsProvider>
}
