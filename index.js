const express = require("express");
const app = express()


app.get("/", function(req,res){
	res.send("Seja bem vindo")
})

app.get("/sobre", function(req,res){
	res.send("minha página sobre") //É necessário fazer a página sobre.html
})
 
app.get("/index",function(req,res){
    res.redirect("http://index.html")
})

//Adicionando Parametros

app.get("ola/:cargo/:nome", function(req,res){//Parametros cargo e nome
    res.send(req.params)//Fazendo requisição dos parametros
        //ou
    res.send("<h1>Olá" + req.nome + "</h1>")
})


    //Apenas servidor e porta não mexer
    app.listen(8080, function(){
		console.log("Servidor funcionando")
        })
