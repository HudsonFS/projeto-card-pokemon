

// /*

// Objetivo 1 - quando clicar na seta de avançar temos q mostrar o proximo card 
//     - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
//     - passo 2 - dar um jeito de identificar o clique do usuario na seta avançar
//     - passo 3 - buscar card selecionado(ja mostrado) e esconder
//     - passo 4 - fazer aparecer o card anterior (colocando selecionado)

// */   

// //- passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
// const btnAvancar = document.getElementById('btn-avancar');
// const btnVoltar = document.getElementById('btn-voltar');
// const cartoes= document.querySelectorAll('.cartao');
// let cartaoAtual= 0;


// //- passo 2 - dar um jeito de identificar o clique do usuario na seta avançar
// btnAvancar.addEventListener('click', function(){

//     //- extra - para parar execução de codigo sem necessidade por n ter mais cartao
//     if(cartaoAtual === cartoes.length -1) return;

//     //- passo 3 - buscar card selecionado(ja mostrado) e esconder
//     const cartaoSelecionado= document.querySelector('.selecionado');
//     cartaoSelecionado.classList.remove('selecionado')

//     //- passo 4 - fazer aparecer o proximo card (colocando selecionado)
//     cartaoAtual++;
//     cartoes[cartaoAtual].classList.add('selecionado');
// })

// /*

// Objetivo 2 - quando clicar na seta de voltar temos q mostrar o card anterior 
//     - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
//     - passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
//     - passo 3 - buscar card selecionado(ja mostrado) e esconder
//     - passo 4 - fazer aparecer o card anterior (colocando selecionado)

// */    


// //- passo 2 - dar um jeito de identificar o clique do usuario na seta voltar
// btnVoltar.addEventListener('click', function(){

//     //- extra - para parar execução de codigo sem necessidade por n ter mais cartao
//     if(cartaoAtual === 0) return;
    
//     //- passo 3 - buscar card selecionado(ja mostrado) e esconder
//     const cartaoSelecionado= document.querySelector('.selecionado');
//     cartaoSelecionado.classList.remove('selecionado')

//     //- passo 4 - fazer aparecer o card anterior (colocando selecionado)
//     cartaoAtual--;
//     cartoes[cartaoAtual].classList.add('selecionado');

// })







//Daqui para baixo sera repetido o mesmo codigo, mas com funçoes que simpliciam a composição não deixando repeticoes




const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes= document.querySelectorAll('.cartao');
let cartaoAtual= 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado= document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
};

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
};

btnAvancar.addEventListener('click', function(){

    if(cartaoAtual === cartoes.length -1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});


btnVoltar.addEventListener('click', function(){

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
