const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
        .then('./config/middlewares.js')
        .then('./api')
        .then('./config/routes.js')
        .into(app) // injetar como parâmetro o app em cada uma das minhas dependências
        
        

app.listen(3000, () => {
    console.log('Backend executando...') // Qunando ele conseguir fazer um bind correto, vai 								     // mostrar que o Backend está a ser executado 	
})