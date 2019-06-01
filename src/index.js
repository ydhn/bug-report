import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import { connectDb } from './models'
import routes from './routes'

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(logger())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', routes.user)
app.use('/messages', routes.message)

connectDb()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`> Ready at http://localhost:${PORT}`)
    })
  })
  .catch(err => {
    if (err) {
      throw new Error(err)
    }
  })
