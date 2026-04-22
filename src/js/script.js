let totalCadastros = 0;
let estoqueBaixo = 0;
let continuar = true;

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


function validarEntrada(mensagem) {
    let valor = prompt(mensagem);

    while (valor === "" || valor === null || valor === undefined) {
        valor = prompt(mensagem);
    }

    return valor;
}

function verificarEstoque(estoque) {
    return Number(estoque) < 5;
}

function mostrarDados(nome, tipo, estoque) {
    alert("A seguir, veja os detalhes do vinho no console.");

    console.log("----- VINHO -----");
    console.log("Nome:", nome);
    console.log("Tipo:", tipo);
    console.log("Quantidade:", estoque);
}

while (continuar) {

    // Cadastro do vinho
    console.log('Informações do vinho');

    let nomeVinho = validarEntrada("Digite o nome do vinho:");
    alert('Nome do vinho registrado! Veja os detalhes no console');
    console.log(nomeVinho);

    let tipo = validarEntrada('Insira o tipo do vinho (Branco, Tinto ou Rosé): ');
    alert('Tipo do vinho registrado! Veja os detalhes no console');
    console.log(tipo);

    let safra = prompt('Insira a safra(ano): ');
    alert('Safra(ano) do vinho registrado! Veja os detalhes no console');
    console.log(safra);

    let estoque = Number(validarEntrada('Insira a quantidade em estoque: '));
    alert('Estoque do vinho registrado! Veja os detalhes no console');
    console.log(estoque);

    if (verificarEstoque(estoque)) {
        estoqueBaixo++;
        alert("Atenção: estoque baixo!");
    }

    mostrarDados(nomeVinho, tipo, estoque);

    totalCadastros++;

    let resposta = prompt("Deseja cadastrar outro vinho? (s/n)");

    if (resposta === null || resposta.toLowerCase() !== "s") {
        continuar = false;
    }
}

alert(
    `Resumo final:
    \nTotal de cadastros: ${totalCadastros}
    \nVinhos com estoque baixo: ${estoqueBaixo}`
);

console.log("RESUMO FINAL");
console.log(`Total de cadastros: ${totalCadastros}`);
console.log(`Vinhos com estoque baixo: ${estoqueBaixo}`);