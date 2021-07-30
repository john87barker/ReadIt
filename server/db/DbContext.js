import mongoose from 'mongoose'
import AccountSchema from '../models/Account'
import StorySchema from '../models/Story'
import CommentSchema from '../models/Comment'

class DbContext {
  Accounts = mongoose.model('Account', AccountSchema);
  Stories = mongoose.model('Story', StorySchema);
  Comments = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
