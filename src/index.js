import express from 'express';
import apiAgenda from  './routes/agenda'
import helmet from  'helmet'
import morgan from  'morgan'

const app = express()

app.use(morgan('dev'))
app.use(helmet())

app.use(express.json())

app.use('/',apiAgenda)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})