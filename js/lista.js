let tabela = document.querySelector("table");
let tbody = document.querySelector('#tabela');
let dados = JSON.parse(localStorage.getItem("dado"));
let form_lista = document.querySelector("#lista");
let input_nome = document.querySelector("#nome");
let input_email = document.querySelector("#email");
let input_senha = document.querySelector("#senha");
let btn_atualizar = document.querySelector('#btn_atualiazar');

if (dados.length > 0) {
  dados.map((usuario, index) => {
    tbody.innerHTML += `
    <tr>
    <td>${usuario.id}</td>
    <td>${usuario.nome}</td>
    <td>${usuario.email}</td>
    <td>
       <button onclick="consultar('${usuario.id}','${usuario.nome}','${usuario.email}','${usuario.senha}',${index})">consultar</button>
       <button class="btn_deletar" onclick="deletar(${index})">deletar</button>
    </td>
   </tr>
    `;
  });
} else {
  tabela.style.display = "none";
}

function consultar(id,nome,email,senha,index)
{
//  console.log(obj);
  let a = document.querySelector('a')
  a.style.display='none'
  tabela.style.display = "none";
  form_lista.style.display = "flex";

  input_nome.value = nome;
  input_email.value = email;
  input_senha.value = senha;

  btn_atualizar.addEventListener('click',(e)=>{
   e.preventDefault();
 // alert(index)
 const usuario_atualizado ={
   id: id,
   nome: input_nome.value,
   email: input_email.value,
   senha: input_senha.value
  }
   atualizar(index,usuario_atualizado);
  })
}

function atualizar(index,obj)
{
   //console.log(obj)
   dados[index] = obj;
   console.log(dados);
   localStorage.setItem('dado', JSON.stringify(dados));
   alert('dados atualizado');
   location.reload();
}

function deletar(index)
{
  dados.splice(index, 1);
  let lista_obj_deletado = JSON.stringify(dados);
  localStorage.setItem("dado", lista_obj_deletado);
  location.reload();
}
