const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  github: String,
  email: String,
  posts: String,
  passwordHash: String
})

userSchema.statics.format = (user) => {
  return {
    id: user.id,
    username: user.username,
    github: user.github,
    email: user.email
  }
}

const User = mongoose.model('User', userSchema)
module.exports = User
