
class Contato {
    constructor(nomePessoa, idade, telefone) {
        this.nome = nomePessoa;
        this.idade = idade;
        this.telefone = telefone;
    }
}

const contato1 = {nome: 'Hiago', idade: 32, telefone: '85999999999'};
const contato2 = {nome: 'Pedro', idade: 30, telefone: '85888888888'};
const contato3 = {nome: 'Bruna', idade: 25, telefone: '85777777777'};
const contato4 = {nome: 'Lucas', idade: 22, telefone: '85666666666'};
const contato5 = new Contato('Carlos', 32, 342545345);
const contato6 = new Contato('Carlos', 243, 45646456);
const contato7 = new Contato('Carlos', 23, 342544564565345);
const contato8 = new Contato('Carlos', 98, 4646456);

let minhaAgenda = [contato1, contato2, contato3, contato4, contato5, contato6, contato7, contato8];

const adicionarContatoHtml = (contato) => {
    const minhaLista = document.getElementById('minhaLista');
    const li = document.createElement('li');
    li.innerText = `Nome: ${contato.nome} - Idade: ${contato.idade} - Telefone: ${contato.telefone}`;
    minhaLista.appendChild(li);
}

const adicionarContato = () => {
    const nome1 = prompt('Informe o nome:');
    const idade = Number(prompt('Informe a idade:'));
    const telefone = prompt('Informe o telefone:');
    const novoContato = {nome: nome1, idade, telefone};
    minhaAgenda.push(novoContato);
    adicionarContatoHtml(novoContato);
    console.log(minhaAgenda);
}

const exibirListaInicial = () => {
    for(i = 0; i < minhaAgenda.length; i++) {
        adicionarContatoHtml(minhaAgenda[i]);
    }
}

const procurarContato = () => {
    // const nomeInformado = prompt('Informe o nome:');
    // const pessoa = minhaAgenda.find(item => item.nome.toUpperCase() === nomeInformado.toUpperCase());
    const pessoas = minhaAgenda.filter(item => item.idade > 26);
    console.log(pessoas);
}

//COMO EU FAÇO PARA DESCOBRIR QUANTOS <NOME DA PESSOA> TEM NA MINHA LISTA TELEFÔNICA?
const descobrirOcorrenciaNome = () => {
    const nome = prompt('Informe o nome:');
    const arrayResultado = minhaAgenda.filter(item => item.nome.toUpperCase() === nome.toUpperCase());
    console.log(arrayResultado.length);
}

//COMO EU ADICIONO UM NOVO CONTATO NA MINHA LISTA GARANTINDO QUE O TELEFONE NAO SE REPITA
const adicionarNovoContato = () => {
    const nome = prompt('Informe o nome:');
    const idade = Number(prompt('Informe a idade:'));
    const telefone = prompt('Informe o telefone:');

    const usuarioJahExiste = minhaAgenda.find(item => item.telefone === telefone);
    if(usuarioJahExiste) {
        alert(`Telefone já cadastrado na agenda pelo contato ${usuarioJahExiste.nome}`);
        return;
    }

    const novoContato = new Contato(nome, idade, telefone);
    minhaAgenda.push(novoContato);
    adicionarContatoHtml(novoContato);
    console.log(minhaAgenda);
}

//COMO EU DELETO UM USUARIO?
const deletarContato = () => {
    const telefone = prompt('Informe o telefone:');
    // minhaAgenda = minhaAgenda.filter(item => item.telefone !== telefone);
    // console.log(minhaAgenda);
    const indexTelefone = minhaAgenda.findIndex(item => item.telefone === telefone);
    minhaAgenda.splice(indexTelefone, 1);
    console.log(minhaAgenda);
}

exibirListaInicial();


