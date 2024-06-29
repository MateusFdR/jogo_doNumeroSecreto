let listaDeNumerosSorteados = [];
let numero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//case sensitive: Diferencia Maiúsculas e minúsculas;
//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'Jogo do número secreto';
//let paragrafo = document.querySelector ('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//Boolean: Valor verdadeiro ou falso;
//Array: Lista;
//.length: Retorna a quantidade de elementos que temos na lista;
//includes(): Verifica se o elemento está na lista;
//push(): Adiciona o elemento que está em parênteses ao final da lista;
//FUNÇÃO COM PARAMETRO: Evita a repetição de código;
function exibirTextoNaTela(tag, texto) {
//document: Interage com o conteúdo e a estrutura de uma página da web;
//querySelector(): Seleciona elementos e manipula o HTML;
        let campo = document.querySelector(tag);
//innerHTML: Manipula o elemento dentro do HTML;
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
//FUNÇÃO SEM PARAMETRO
function mensagemInicial() {
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', `Escolha um número entre 1 e ${numero}`);
}
mensagemInicial()
//function: função responsável por executar alguma ação dentro do nosso programa;
function verificarChute() {
//Value: Valor atribuido a uma função;  
        let chute = document.querySelector('input').value;   
        if (chute == numeroSecreto) {
                exibirTextoNaTela('h1', 'Acertou!');
                let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
                exibirTextoNaTela('p', mensagemTentativas);
//document.getElementById: O id é um atributo único, não pode ser usado em outro lugar;
//removeAttribute: Para remover o atributo;
                document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
                if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
                exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
        } 

}
//FUNÇÃO COM RETORNO: Retorna algum valor atribuido;
function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numero + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
        if (quantidadeDeElementosNaLista == numero) {
                listaDeNumerosSorteados = [];
        }
        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
                return gerarNumeroAleatorio();
        }else {
                listaDeNumerosSorteados.push(numeroEscolhido);
                console.log(listaDeNumerosSorteados)
                return numeroEscolhido;
        }
}

function limparCampo() {
        chute = document.querySelector('input');
        chute.value = "";
}

function reiniciarJogo(){
        tentativas = 1;
        numeroSecreto = gerarNumeroAleatorio();
        mensagemInicial();
        limparCampo();
//.setAttribute(): Setar um atibuto;
        document.getElementById('reiniciar').setAttribute('disabled', true);
}