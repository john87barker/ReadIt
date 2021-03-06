import mongoose from 'mongoose'
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default User
