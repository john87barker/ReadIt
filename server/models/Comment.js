import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    accountId: { type: String, required: true },
    upVote: { type: Number },
    downVote: { type: Number },
    storyId: { type: String, required: true },
    body: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
export default Comment
