const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hola Mundos')
})
app.listen(3000)