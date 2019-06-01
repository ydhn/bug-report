import mongoose from 'mongoose'

export const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Message = mongoose.model('Message', MessageSchema)

export default Message
