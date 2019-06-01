import mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  }
})

UserSchema.static.findByUsername = async function(username) {
  let user = await this.findOne({
    username
  })

  if (!user) {
    user = await this.findOne({ email: username })
  }

  return user
}

UserSchema.pre('remove', function(next) {
  this.model('Message').deleteMany(
    {
      user: this._id
    },
    next
  )
})

const User = mongoose.model('User', UserSchema)

export default User
