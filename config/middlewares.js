const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => { // app - Este parâmetro é igual ao app que fez o require express lá em 							           index.js

    app.use(bodyParser.json())
    app.use(cors()) 
}	
