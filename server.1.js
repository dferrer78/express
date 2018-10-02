const express = require('express')
const app = express()
/* const middleware = require('./middleware')
const consoleLogMiddleware = middleware.consoleLogMiddleware
const fileLogMiddleware = middleware.fileLogMiddleware */

const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware')

app.use(consoleLogMiddleware)

app.use(fileLogMiddleware)

// fichero de log
/* app.use((req, res, next) => {
  const now = new Date().toString()
  console.log(`Time: ${now} ${req.method} ${req.url}`)

  next()
})
 */

/* app.use((req, res, next) => {
  const now = new Date().toString()
  const message = `Time: ${now} ${req.method} ${req.url}\n`

  fs.appendFile('server.log', message, (err, data) => {
    if (err) console.log(err)
  })
  next()
  // console.log(req.user)
}) */

// middleware
app.use('/contactar', (req, res, next) => {
  next()
})

/* app.get('/', (req, res) => {
  res.send('Hola Mundo')
}) */
/* app.get('/contactar', (req, res) => {
    res.send('<h1>Página para contactar</1>')
}) */
// json
app.get('/contactar', (req, res) => {
  res.send({ Nombre: 'Pepe', correo: 'pepe@pepe.com' })
})
app.listen(3000, () => { console.log('Servidor levantado puerto 3000') }) // puerto, función callback
