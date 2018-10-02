const express = require('express')
const app = express()
const path = require('path')

const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware')

const hbs = require('hbs')
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
app.set('view engine', 'hbs') // clave valor

app.use(consoleLogMiddleware)

app.use(fileLogMiddleware)

const staticRoute = path.join(__dirname, 'public')
app.use(express.static(staticRoute))
// app.use('/static', express.static(staticRoute)) // puedo hacer la ruta estatica
// middleware

/* app.get('/', (req, res, next) => {
  res.send('Hola')
}) */

app.get('/contactar', (req, res) => {
  res.render('contactar.hbs', {
    pageTitle: 'Contactar',
    currentYear: new Date().getFullYear()
  })
})

app.get('/inicial', (req, res) => {
  res.render('inicial.hbs', {
    pageTitle: 'Inicial',
    currentYear: new Date().getFullYear()
  })
})

app.listen(3000, () => {
  console.log('Servidor levantado puerto 3000')
}) // puerto, función callback
