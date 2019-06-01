import mongoose from 'mongoose'
import User from './User'
import Message from './Message'

const connectDb = () => {
  return mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
}

const models = {
  User,
  Message
}

export { connectDb }

export default models
