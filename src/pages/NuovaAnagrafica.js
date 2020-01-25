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
import BasicInput from "../components/BasicInput";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import {salvaAnagraficaAction} from "../store/action/anagrafica";
import Navbar from "../components/Navbar";

const handleDateChange = setter => d => setter(d);


export default props => {
    const today = new Date();

    const dispatch = useDispatch();

    const handleClick = () => {
        const data = {nome, cognome, dataDiNascita, dataDiIscrizione, nazionalita, telefono1, telefono2  };
        console.log(
            data
        )
        dispatch(salvaAnagraficaAction(data));
    };

    const nazionalitaList = [
        'Italiana',

    ];

    const [nome, setNome] = useState('');
    const [cognome, setCognome] = useState('');
    const [dataDiNascita, setDataDiNascita] = useState(null);
    const [dataDiIscrizione, setDataIscrizione] = useState(today);
    const [nazionalita, setNazionalita] = useState('');
    const [telefono1, setTelefono1] = useState('');
    const [telefono2, setTelefono2] = useState('');

    return <MuiPickersUtilsProvider utils={DateFnsUtils} locale={itLocale}>
        <Navbar title={'Nuova Anagrafica'}/>
        <Container style={{marginTop:'70px'}}>
            <Grid alignItems={"center"} container justify={"space-around"} spacing={3}>


                    <BasicInput
                        required
                        label="Nome"
                        name="nome"
                        value={nome}
                        setter={setNome}
                        autoFocus
                    />
                    <BasicInput
                        required
                        label="Cognome"
                        name="cognome"
                        value={cognome}
                        setter={setCognome}
                    />
                <Grid item xs={12} md={6}>
                    <DatePicker value={dataDiNascita} onChange={handleDateChange(setDataDiNascita)}  format={'dd/MM/yyyy'} name={'dataDiNascita'} required fullWidth label={'Data di nascita'} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <DatePicker value={dataDiIscrizione} onChange={handleDateChange(setDataIscrizione)}  format={'dd/MM/yyyy'} name={'dataDiIscrizione'} required fullWidth label={'Data di iscrizione'} />
                </Grid>
                    <BasicInput
                        required
                        label="Telefono 1"
                        name="telefono"
                        value={telefono1}
                        setter={setTelefono1}
                    />
                    <BasicInput
                        required
                        label="Telefono 2"
                        name="telefono2"
                        value={telefono2}
                        setter={setTelefono2}
                    />
                    <Grid item xs={12} md={6}>
                        <InputLabel id="nazionalita">Nazionalità</InputLabel>
                        <Select
                            labelId="nazionalita"
                            id="select-nazionalita"
                            value={nazionalita}
                            onChange={e => setNazionalita(e.target.value)}
                            fullWidth
                        >

                            {nazionalitaList.map(n => <MenuItem value={n} key={n}>{n}</MenuItem> )}
                        </Select>
                    </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleClick}>
                        Salva
                    </Button>
                </Grid>
            </Grid>
        </Container>
    </MuiPickersUtilsProvider>
}
