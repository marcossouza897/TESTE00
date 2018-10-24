var imagem = document.querySelectorAll('img');

imagem[0].onclick = function(){
var meulocal = imagem[0].getAttribute('src');

    if(meulocal === 'fotos/primeira.png'){
        imagem[0].setAttribute('src','fotos/primeira.jpg')
    }else{
        imagem[0].setAttribute('src','fotos/segunda.jpg')
    }
}

imagem[1].onclick = function(){
var meulocal = imagem[1].getAttribute('src');

    if(meulocal === 'fotos/terceira.png'){
        imagem[1].setAttribute('src', 'fotos/terceiras.jpg')
    }else{
        imagem[1].setAttribute('src', 'fotos/quarta.jpg') 
    }
}