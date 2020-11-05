const express= require('express')
const app= express()

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/ayuda', function(req, res){
    res.sendFile(__dirname + '/views/ayuda.html')
})
app.get('/crea-tu-cuenta', function(req, res){
    res.sendFile(__dirname + '/views/crea-tu-cuenta.html')
})
app.get('/ingresa', function(req, res){
    res.sendFile(__dirname + '/views/ingresa.html')
})
app.get('/mis-compras', function(req, res){
    res.sendFile(__dirname + '/views/mis-compras.html')
})
app.get('/ofertas', function(req, res){
    res.sendFile(__dirname + '/views/ofertas.html')
})
app.get('/tiendas-oficiales', function(req, res){
    res.sendFile(__dirname + '/views/tiendas-oficiales.html')
})
app.get('/vender', function(req, res){
    res.sendFile(__dirname + '/views/vender.html')
})



app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/' + req.url)
})



app.listen(3000, function(req, res){
    console.log('ingresa a http://localhost:3000')
})