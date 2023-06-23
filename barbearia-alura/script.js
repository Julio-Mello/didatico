/*Quatro variáveis que serão "puxadas" pelo ID*/
var cabeçalho = document.getElementById('cabeçalho');
var navegaçao = document.getElementById('navegaçao');
var conteudo = document.getElementById('conteudo');
var showSidebar = false;//Armazena o estado da side bar. Se estará ativo ou não
 
function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)//Se estiver true
    {
        navegaçao.style.marginLeft = '-10vw';
        navegaçao.style.animationName = 'showSidebar';//Ativa o Keyframe ShowSidebar
        conteudo.style.filter = 'blur(2px)';//Faz com que o couteudo fique desfocado
    }
    else//Se estiver false
        {
        navegaçao.style.marginLeft = '-100vw';
        navegaçao.style.animationName = '';//Retira o Keyframe ShowSidebar quando fechar a side bar
        conteudo.style.filter = '';//Remove o blur quando fechar a side bar
        }
}
//Faz com que quando clique fora da side bar ela se feche
function closeSidebar()
{
    if(showSidebar)//Verifica se a side bar esta aberta
    {
        showSidebar = true;
        toggleSidebar();
    }
}
//Quando redimensionar a tela o menu nav se adaptará 
window.addEventListener('resize', function(event) 
{
    if(window.innerWidth > 600 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
});
