 var span = document.querySelector('.conteudo span');

    span.addEventListener('click', function(){
    var conteudo = document.querySelector('.conteudo p');

    if(conteudo.classList.contains('mostrar' )){
        console.log("esconda");
        span.innerHTML = "Ver mais";
        conteudo.classList.remove('mostrar');
    }else {
        conteudo.classList.add('mostrar');
        span.innerHTML = "Ocultar";
        console.log("mostre");
    }
    
});