const Removerprodutosbuttons = document.getElementsByClassName("Remover")
for (var i = 0; i < Removerprodutosbuttons.length;i++ ){
    Removerprodutosbuttons[i].addEventListener("click",function(event){
    event.target.parentElement.parentElement.parentElement.remove()
    })
}
