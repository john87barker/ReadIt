import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    userId: { type: String, required: true },
    upVote: { type: String },
    downVote: { type: String },
    storyId: { type: String, required: true },
    body: { type: String, required: true },
    id: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
export default Comment
