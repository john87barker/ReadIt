import mongoose from 'mongoose'
import UserSchema from '../models/User'
import StorySchema from '../models/Story'
import CommentSchema from '../models/Comment'

class DbContext {
  Users = mongoose.model('User', UserSchema);
  Stories = mongoose.model('Story', StorySchema);
  Comments = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
