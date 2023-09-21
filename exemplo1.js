FUNÇÃO => AÇÃO

const somarDoisNumeros = (numero1, numero2) => {
  return numero1 + numero2
}

let lista = [];
const puxarDadosDoServidor = () => {
    lista = axios.get('url');
}

OBJETO => CONSTANTE

const carro = {
    placa, modelo, cor
}

const pessoa = {
    nome, sobrenome, sexo, idade
}

