import express from 'express'
import diaryRouter from './routes/diariesRoutes'

const app = express()
app.use(express.json())

const PORT = 5000

app.get('/ping', (_req, res) => {
  console.log('pig')
  res.send('Pong Pung')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
