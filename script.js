const form = document.querySelector('form');
const out = document.getElementById('out');
const menssagem = document.getElementById('menssagem')

form.addEventListener("submit", function(ev) {
    ev.preventDefault()
    let valor = Number(form.inValor.value);
    let medidaInicial = form.de.value;
    let medidaFinal = form.para.value;
    
    
    let metros;
    let medInicial;
    switch(medidaInicial) {
        case 'm':
            metros = valor;
            medInicial = "Metros(s)"
            break;
        case 'k':
            metros = valor * 1000;
            medInicial = "Quilômetros(s)"
            break;
        case 'c':
            metros = valor / 100;
            medInicial = "Centímetros(s)"
            break;
        case 'mm':
            metros = valor / 1000;
            medInicial = "Milímetros(s)"
            break;
    }

    let resultado;
    let medFinal
    switch(medidaFinal) {
        case 'm':
            resultado = valor;
            medFinal = "Metros(s)"
            break;
        case 'k':
            resultado = valor / 1000;
            medFinal = "Quilômetros(s)"
            break;
        case 'c':
            resultado = valor * 100;
            medFinal = "Centímetros(s)"
            break;
        case 'mm':
            resultado = valor * 1000;
            medFinal = "Milímetros(s)"
            break;
    }
    console.log(resultado)
    out.value = resultado.toFixed(2);

    if(medFinal == medInicial) {
        menssagem.innerText = ""
    }
    else {
        menssagem.innerText = `${valor} ${medInicial} equivalem a ${resultado} ${medFinal}`
    }

})