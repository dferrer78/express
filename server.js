const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})
app.get('/contactar', (req, res) => {
    res.send('Página para contactar')
})
app.listen(3000, ()=> {console.log('Servidor levantado')} // puerto, función callback

)
