var menu = document.getElementById("menu")


let dados_banco = JSON.parse(localStorage.getItem('dado'))


addEventListener('submit',(e)=>{

    e.preventDefault()
    let email_login = document.querySelector('#login').value
    let senha = document.querySelector('#senha').value
    
    if(dados_banco)
    {
        for(i=0;i < dados_banco.length;i++)
        {            
            if(dados_banco[i].email == email_login && dados_banco[i].senha == senha)
            {   
                window.location.href ='/page/index.html'
                return
            }
        }
        alert('email ou senha errados')
    }



})




console.log(dados_banco)
