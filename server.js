const express = require('express')
const app = express()
const path = require('path')

const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware')

app.use(consoleLogMiddleware)

app.use(fileLogMiddleware)

const staticRoute = path.join(__dirname, 'public')
app.use(express.static(staticRoute))
// middleware

app.get('/', (req, res, next) => {
  res.send('Hola')
})

app.get('/contactar', (req, res) => {
  res.send({ Nombre: 'Pepe', correo: 'pepe@pepe.com' })
})

app.listen(3000, () => {
  console.log('Servidor levantado puerto 3000')
}) // puerto, función callback
