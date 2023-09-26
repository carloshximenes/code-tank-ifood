const calcularDiferencaDoisNumeros = (numero1, numero2) => {
    return numero1 - numero2;
}
calcularDiferencaDoisNumeros(2,1); //1
calcularDiferencaDoisNumeros(1,2); //-1

// UMA FUNÇÃO PODE SER CRIADA SEM PARAMETRO DE ENTRADA E SEM PARAMATRO DE SAIDA
// const gritar = () => {
//     alert('AAAAAAAAH');
// }

//UMA FUNÇÃO PODE SER CRIADA COM PARAMETRO DE ENTRADA E SEM PARAMATRO DE SAIDA
const gritar = (frase1) => {
    alert(frase1.toUperCase());
}

const frase = prompt('Me diz uma palavra:');
gritar(frase);
gritar('AAAAAAAAH');
gritar('EEEEEEH');

// (+) SOMA
// (-) SUBTRAÇÃO
// (*) MULTIPLICAÇÃO
// (/) DIVISÃO
// (%) MODULO
// (**) EXPONENCIAL

// == IGUALDADE
// === IGUALDADE ESTRITA (VALOR E TIPO)
// != DIFERENTE
// !== DIFERENTE ESTRITO (VALOR E TIPO)
// > MAIOR QUE
// >= MAIOR OU IGUAL A
// < MENOR QUE
// <= MENOR OU IGUAL A

// && AND
// || OR
// ! NOT

// V && V = V
// V && F = F
// F && V = F
// F && F = F

// V || V = V
// V || F = V
// F || V = V
// F || F = F

// !F = V
// !V = F
// !!F = F
// !!V = V


const nomeExiste = !!prompt('Nome');

const nome = null;
// const nomeEmBooleano = nome; //undefined
// const nomeEmBooleano = !nome; //true
// const nomeEmBooleano = !!nome; //false

//ARRAYs

const array = [1,2,3,4,5,6,7,8,9,10,1,4,7,8,9,1,5];
const tamanhoArray = array.length; // 10
const primeiroElemento = array[0]; // 1 array.at(0)
const ultimoElemento = array[array.length - 1]; // 10 array.at(-1)
// Adicionar um novo elemento ao array
array.push(11);
const primeiraOcorrencia = array.indexOf(4); // 3
const ultimaOcorrencia = array.lastIndexOf(4); // 11
const semOcorrenciaEncontradas = array.indexOf(99); // -1

const numeros = [2, 7, 5, 9, 11, 7, 9, 2];

const encontrarNumerosQueSeRepetem = (array) => {
    const numerosQueSeRepetem = [];
    const numerosUnicos = [];

    for(let i = 0; i < array.length; i++) {
        const numeroDaVez = array[i];
        if(numerosUnicos.includes(numeroDaVez) && !numerosQueSeRepetem.includes(numeroDaVez)) {
            numerosQueSeRepetem.push(numeroDaVez);
        } else {
            numerosUnicos.push(numeroDaVez);
        }
    }

    return numerosQueSeRepetem;
}

encontrarNumerosQueSeRepetem(numeros); // [2, 7, 9];

/////////////////

const conjuntoDeNomes = 'adaCarlosLeticiaPedroHiagoNayraDayanaCamilaRenata';

const quantasPalavrasTem = (texto) => {
    // let contador = texto[0] === texto[0].toLowerCase() ? 1 : 0;
    let contador = 0;
    if(texto[0] === texto[0].toLowerCase()) {
        contador = 1;
    }
    for(let i = 0; i < texto.length; i++) {
        const caractereAtual = texto[i];
        if(caractereAtual === caractereAtual.toUpperCase()) {
            contador++;
        }
    }
    return contador;
}

quantasPalavrasTem(conjuntoDeNomes); //8