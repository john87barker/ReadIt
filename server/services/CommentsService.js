import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async getAll(query) {
    return await dbContext.Comments.find(query)
  }

  async getById(id) {
    const comment = await dbContext.Comments.findById(id)
    if (!comment) {
      throw new BadRequest('invalid id')
    }
    return comment
  }

  async create(body) {
    return await dbContext.Comments.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const comment = await dbContext.Comments.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return comment
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Comments.findByIdAndDelete(id)
  }
}

export const commentsService = new CommentsService()
