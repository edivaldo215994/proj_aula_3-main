let form = document.querySelector('form')
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let dados = []




addEventListener('submit',(e)=>{

    //PEGANDO VALORES DO FORMULARIO
    e.preventDefault()
  
    const usuario = {
      id: Date.now(),
      nome: nome.value,
      email: email.value,
      senha: senha.value
    }
    
  //ADCIONAR OBJETO NO LOCALSTORAGE
  dados = JSON.parse(localStorage.getItem('dado'))
    if(dados){
        dados.push(usuario)
        dados_json = JSON.stringify(dados)
        localStorage.setItem('dado',dados_json)
        console.log(dados)
    }else{
       dados = [usuario]
       dados_json = JSON.stringify(dados)
       localStorage.setItem('dado',dados_json)
    }

    alert('dados cadastrado com sucesso')
    window.location.href = '../page/login.html'
})

   
