// IF, FOR, WHILE, DO WHILE, SWITCH

const testarReplace = () => {
    const texto = 'Carlos';
    const outroNome = 'Outro Nome'
const novoNome = texto.concat('Outro nome').concat(outroNome);
console.log(novoNome.includes('Carlos'))
}


const sortearNumero = () => {
    const numero = Number(prompt('Informe um numero'));
    if(isNaN(numero)) {
        alert('Você acha que me engana?');
        return;
    }

    const arredondaPraBaixo1 = Math.floor(1.3) // 1
    const arredondaPraBaixo2 = Math.floor(1.99) // 1

    const arredonda1 = Math.round(1.49) // 1
    const arredonda2 = Math.round(1.5) // 2

    const numeroMaximo = Math.max(1, 2, 3, 4, 5) // 5
    const numeroMinimo = Math.min(1, 2, 3, 4, 5); // 1

    const numeroAleatorio = parseInt(Math.random() * 10);
    
    if(numero === numeroAleatorio) {
        alert('Acertô miseravi');
        return;
    } else {
        // alert('Errrroooou! O número correto era: ' + numeroAleatorio);
        alert(`Errrroooou! O número correto era: ${numeroAleatorio}`);
        // alert('Errrroooou! O número correto era: '.concat(numeroAleatorio))
    }
    
    // FOR
    // const numerosPremiados = [10, 20, 30, 40, 50];
    // for(i = 0; i < numerosPremiados.length; i++) {
    //     if(numerosPremiados[i] === numero) {
    //         alert('Acertô miseravi');
    //         return;
    //     }
    //     console.log(i, numerosPremiados[i]);
    // }


    // USANDO IF e ELSE
    // const numeroPremiado = 10;
    // if(numero === numeroPremiado) {
    //     alert('Acertô miseravi');
    // } else if(numero > numeroPremiado) { 
    //     alert('Errrooou! Tente um número menor');
    // } else {
    //     alert('Errrooou! Tente um número maior');
    // }
}


// console.log(numero == numeroPremiado); //Comparação (valores)
// console.log(numero === numeroPremiado); //Comparação (valores e tipo)