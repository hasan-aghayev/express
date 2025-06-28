import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

// ВАШИ НОВЫЕ ИЗМЕНЕНИЯ
app.get('/test', (req, res) => {
  res.send('Это тестовая страница, созданная в новой ветке!')
})

app.listen(8000, () => {
  console.log('Сервер запущен на http://localhost:3000')
})