const navegacao = document.querySelector('nav')
document.querySelector('.menu').onclick = function(){
    this.classList.toggle('active');
    navegacao.classList.toggle('active');
}