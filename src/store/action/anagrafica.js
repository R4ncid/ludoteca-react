export const SALVA_ANAGRAFICA = 'SALVA_ANAGRAFICA';



const anagraficaAggiuntaAction = data => {

    return {
        type: SALVA_ANAGRAFICA,
        payload: data
    }
};



export const salvaAnagraficaAction =  data => dispatch =>{
    console.log(data);
    setTimeout(
        () => dispatch(anagraficaAggiuntaAction(data)),
        2000
    )
};
