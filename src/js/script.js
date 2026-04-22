console.log('Informações de Cadastro');

let nome = prompt("Digite seu nome pro cadastro:");
alert('Nome registrado! Veja os detalhes no console');
console.log(nome);

let email = prompt("Digite seu email pro cadastro:");
alert('Email registrado! Veja os detalhes no console');
console.log(email);

let senha = prompt("Digite sua senha pro cadastro:");
alert('Senha registrada! Veja os detalhes no console');
console.log(senha);

alert('Cadastro realizado! Veja os detalhes no console');
 
// Cadastro do vinho
console.log('Informações do vinho')

let nomeVinho = prompt('Insira o nome do vinho: ');
alert('Nome do vinho registrado! Veja os detalhes no console');
console.log(nomeVinho);

let tipo = prompt('Insira o tipo do vinho (Branco, Tinto ou Rosé): ');
alert('Tipo do vinho registrado! Veja os detalhes no console');
console.log(tipo);

let safra = prompt('Insira a safra(ano): ');
alert('Safra(ano) do vinho registrado! Veja os detalhes no console');
console.log(safra);

let estoque = prompt('Insira a quantidade em estoque: ');
alert('Estoque do vinho registrado! Veja os detalhes no console');
console.log(estoque);

let continuar = prompt("Deseja cadastrar outro vinho (s/n)? ");
let totalCadastros = 0;
let estoqueBaixo = 0;

function validarEntrada(valor, mensagem) {
    while (valor === "" || valor === null || valor === undefined) {
        valor = prompt(mensagem);
    }
    return valor;
}

while (continuar === s) {

    let nomeVinho = validarEntrada(prompt("Digite o nome do vinho:"), "Digite o nome do vinho:");
    let tipo = validarEntrada(prompt("Digite o tipo do vinho:"), "Digite o tipo do vinho:");
    let quantidade = Number(validarEntrada(prompt("Digite a quantidade:"), "Digite a quantidade:"));

    if (verificarEstoque(quantidade)) {
        estoqueBaixo++;
    }   

    mostrarDados(nomeVinho, tipo, quantidade);

    totalCadastros++;
    let resposta = prompt("Deseja cadastrar outro vinho? (s/n)");
    if (resposta === null || resposta.toLowerCase() !== "s") {
        continuar = false;
    }
  
}
