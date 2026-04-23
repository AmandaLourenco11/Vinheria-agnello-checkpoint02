let totalCadastros = 0;
let estoqueBaixo = 0;
let continuar = true;
let safraMaisAntiga = 9999;
let nomeMaisAntigo = '';

//Variáveis dos vinhos
let nomeVinho1, tipo1, estoque1, safra1, classificacao1;
let nomeVinho2, tipo2, estoque2, safra2, classificacao2;
let nomeVinho3, tipo3, estoque3, safra3, classificacao3;
let nomeVinho4, tipo4, estoque4, safra4, classificacao4;
let nomeVinho5, tipo5, estoque5, safra5, classificacao5;

console.log("----- Informações de Cadastro ------");

let nome = validarEntrada("Digite seu nome pro cadastro:");
alert('Nome registrado! Veja os detalhes no console');
console.log(nome);

let email = validarEntrada("Digite seu email pro cadastro:");
alert('Email registrado! Veja os detalhes no console');
console.log(email);

let senha = validarEntrada("Digite sua senha pro cadastro:");
alert('Senha registrada! Veja os detalhes no console');
console.log(senha);

alert('Cadastro realizado! Veja os detalhes no console');

// Função para validar se a entrada é vazia, nula ou indefinida
function validarEntrada(mensagem) {
    let valor = prompt(mensagem);

    while (valor === "" || valor === null || valor === undefined) {
        alert("Por favor, insira uma entrada válida.");
        valor = prompt(mensagem);
    }

    return valor;
}

// Função para validar se a entrada é um número válido
function validarNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor === "" || valor === null || valor === undefined) {
        alert("Por favor, insira uma entrada válida.");
        valor = prompt(mensagem);
    }
    return Number(valor);
}

// Função para verificar se o estoque do vinho é baixo (menos de 5 unidades)
function verificarEstoque(estoque) {
    return Number(estoque) < 5;
}

// Função para mostrar os dados do vinho no console
function mostrarDados(nome, tipo, estoque, safra, classificacao) {
    alert("A seguir, veja os detalhes do vinho no console.");

    console.log("----- VINHO -----");
    console.log("Nome:", nome);
    console.log("Tipo:", tipo);
    console.log("Quantidade:", estoque);
    console.log("Safra:", safra);
    console.log("Classificação:", classificacao);
}

// Função para classificar se o vinho é jovem, amadurecido ou antigo com base na safra
function classificarVinho(safra) { 
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - Number(safra);

    if (idade <= 3) {
        return "Vinho jovem";
    }else if (idade <= 10) {
        return "Amadurecido";
    }else{
        return "Antigo";
    }
}

// Loop principal para cadastro de vinhos
while (continuar) {

    // Cadastro do vinho
    console.log('Informações do vinho');

    let nomeVinho = validarEntrada("Digite o nome do vinho:");
    alert('Nome do vinho registrado! Veja os detalhes no console');

    let tipo = validarEntrada('Insira o tipo do vinho (Branco, Tinto ou Rosé): ');
    alert('Tipo do vinho registrado! Veja os detalhes no console');

    let safra = validarNumero('Insira a safra(ano): ');
    alert('Safra(ano) do vinho registrado! Veja os detalhes no console');

    let estoque = validarNumero('Insira a quantidade em estoque: ');
    alert('Estoque do vinho registrado! Veja os detalhes no console');

    let classificacao = classificarVinho(safra);

    if (verificarEstoque(estoque)) {
        estoqueBaixo++;
        alert("Atenção: estoque baixo!");
    }
    
    if (safra < safraMaisAntiga) {
        safraMaisAntiga = safra;
        nomeMaisAntigo = nomeVinho;
    }

// Armazenamento dos dados de forma numerada para cada vinho cadastrado
    if (totalCadastros === 1) {
        nomeVinho1 = nomeVinho;
        tipo1 = tipo;
        estoque1 = estoque;
        safra1 = safra;
        classificacao1 = classificacao;
    } else if (totalCadastros === 2) {
        nomeVinho2 = nomeVinho;
        tipo2 = tipo;
        estoque2 = estoque;
        safra2 = safra;
        classificacao2 = classificacao;
    } else if (totalCadastros === 3) {
        nomeVinho3 = nomeVinho;
        tipo3 = tipo;   
        estoque3 = estoque;
        safra3 = safra;
        classificacao3 = classificacao;
    } else if (totalCadastros === 4) {
        nomeVinho4 = nomeVinho;
        tipo4 = tipo;
        estoque4 = estoque;
        safra4 = safra;
        classificacao4 = classificacao;
    } else if (totalCadastros === 5) {
        nomeVinho5 = nomeVinho;
        tipo5 = tipo;
        estoque5 = estoque;
        safra5 = safra;
        classificacao5 = classificacao;
    }

    mostrarDados(nomeVinho, tipo, estoque, safra, classificacao);

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

console.log("----- RESUMO FINAL -----");
console.log(`Total de cadastros: ${totalCadastros}`);
console.log(`Vinhos com estoque baixo: ${estoqueBaixo}`);
console.log(`Vinho mais antigo: ${nomeMaisAntigo} - (Safra: ${safraMaisAntiga})`);