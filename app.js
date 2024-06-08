const express = require('express')
const app = express()
const bodyParser = require('body-parser') // Removido o espaço

const userBD = require('./user-dao')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()); // Alterado de app.get para app.use


app.get('/', function(req, res){
    res.send("Minha API")
})

app.get('/users',function(req,res){
	userBD.getAllUsers(function(users){
	res.json(users)
	})
})

app.get('/users/:id',function(req,res){
	const id = req.params.id

	userBD.getAllUsersById(id, function(users){
	res.json(users)
	})
})

app.post('/users/', function(req,res){
	userBD.addUser(users, function(users){
		res.json(users)
	})
})

const server = app.listen(3000, function(){ // Corrigido Function para function
    const host = server.address().address
    const port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})
