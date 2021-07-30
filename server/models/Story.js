import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Story = new Schema(
  {
    userId: { type: String, required: true },
    upVote: { type: String },
    downVote: { type: String },
    title: { type: String, required: true },
    body: { type: String, required: true },
    imgUrl: { type: String, required: true },
    id: { type: String, required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Story
