const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function criaRelogio(segundos){
    const data = new Date(segundos * 1000);
    
    return data.toLocaleTimeString('pt-BR',{
    hour12: false,
    timeZone: 'UTC'
    });
}
// IMPORTANTE - Sempre que voce for acessar uma variavel dentro de uma função
//  em outra função vc precisa criar ela no escopo global antes.  
let timer;
let segundos = 0;

function iniciaRelogio(){
    timer = setInterval(function(){
    segundos++;
    relogio.innerHTML = (criaRelogio(segundos));        
    }, 1000)
}

iniciar.addEventListener('click', function(event){
    iniciaRelogio();
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
});

zerar.addEventListener('click', function(event){
    segundos = 0;
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
});