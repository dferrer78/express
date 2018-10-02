const express = require('express')
const app = express()

// fichero de log
app.use((req, res, next) => {
  const now = new Date().toString()
  console.log(`Time: ${now} ${req.method} ${req.url}`)
  // req.user = 'pepe'
  next()
})

app.use((req, res, next) => {
  console.log(req)
  // console.log(req.user)
})

// middleware
app.use('/contactar', (req, res, next) => {
  next()
})

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})
/* app.get('/contactar', (req, res) => {
    res.send('<h1>Página para contactar</1>')
}) */
// json
app.get('/contactar', (req, res) => {
  res.send({ Nombre: 'Pepe', correo: 'pepe@pepe.com' })
})
app.listen(3000, () => { console.log('Servidor levantado puerto 3000') }) // puerto, función callback
