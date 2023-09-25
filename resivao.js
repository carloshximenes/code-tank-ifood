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

