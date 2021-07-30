import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Story = new Schema(
  {
    accountId: { type: String, required: true },
    upVote: { type: Number, default: 0 },
    downVote: { type: Number, default: 0 },
    title: { type: String, required: true },
    body: { type: String, required: true },
    imgUrl: { type: String, required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Story
