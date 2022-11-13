const formatearDinero = (valor) =>{
    const formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor)
}

const calcularTotal = (cantidad, plazo) =>{
    let total;

    //mas dinero menos interes
    if(cantidad < 500){
        total = cantidad * 1.5;
    }else if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.3;
    }else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.25;
    }else{
        total = cantidad * 1;
    }

    //Plazo
    //mas plazo mas interes
    if (plazo === 6) {
        total *= 1.1
    }else if(plazo === 9){
        total *= 1.2;
    }else{
        total *= 1.3
    }

    return total
}

export{formatearDinero, calcularTotal}