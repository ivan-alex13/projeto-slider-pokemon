const btnavancar = document.getElementById('btn-avancar');
const btnvoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0; 

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    
    cartaoSelecionado.classList.remove('selecionado');
}
function mostrarCartao(indiceCartao){
    cartoes[cartaoAtual].classList.add('selecionado');
}

btnavancar.addEventListener('click', function (){
    if(cartaoAtual === cartoes.length - 1) return
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnvoltar.addEventListener('click', function (){
    if(cartaoAtual === 0)return;
    const cartaoSelecionado = document.querySelector('.selecionado');
        esconderCartaoSelecionado();
        cartaoAtual--;
        mostrarCartao(cartaoAtual);
     });