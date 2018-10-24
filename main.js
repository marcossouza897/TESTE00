var imagem = document.querySelectorAll('img');

imagem[0].onclick = function(){
    var meuLocal = imagem[0].getAttribute('src');

    if (meuLocal === 'fotos/primeira.jpg'){
        imagem[0].setAttribute('src','fotos/terceira.jpg')
    }
    else{
    imagem[0].setAttribute('src','fotos/primeira.jpg')
    }
}


imagem[1].onclick = function(){
    var meuLocal = imagem[1].getAttribute('src');

    if (meuLocal === 'fotos/segunda.jpg'){
        imagem[1].setAttribute('src','fotos/quarta.jpg')
    }
    else{
    imagem[1].setAttribute('src','fotos/segunda.jpg')
    }
}