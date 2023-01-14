import express from 'express'

// Importamos rutas
import diaryRouter from './routes/diaries.routes'

const app = express()
app.use(express.json()) // Middleware tranforma el req.body a JSON

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})

app.use('/api/diaries', diaryRouter)

app.get('/ping', (_req, res) => {
  res.send('Pong')
})
