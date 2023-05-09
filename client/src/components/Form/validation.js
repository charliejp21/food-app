const validation = (form, errors, setErrors) => {

    // title

    if(form.name){

        if(form.name.length > 50) setErrors({...errors, name: "No puedes superar los 50 cracteres"});

        else if(
            
            !/^[A-Za-z\s]*$/.test(form.name)

        ){

            setErrors({...errors, name: "Solo debes ingresar texto sin caracteres especiales"});

        }else{

            setErrors({...errors, name: ""});

        }

    }

    if(form.summary){

        if(form.summary.length > 200) setErrors({...errors, summary: "No puedes superar los 200 cracteres"});

        else if(!/^[A-Za-z0-9\s]*$/.test(form.summary)){

            setErrors({...errors, summary: "Solo debes ingresar texto y numeros sin caracteres especiales"});

        }else{
            
            setErrors({...errors, summary: ""});

        }

    }

    if(form.steps){

        if(form.steps.length > 800) {
            
            setErrors({...errors, steps: "No puedes superar los 800 cracteres"});

        }else{
            
            setErrors({...errors, steps: ""});

        }

    }

    //imagen url
    if(form.image){

        if(!/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g.test(form.image)){

            setErrors({...errors, image: "Ingresa una URL válida"});

        }else{
            
            setErrors({...errors, image: ""});

        }

    }

};

export default validation;