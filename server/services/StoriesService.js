import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StoriesService {
  // NOTE this is relationship between stories and Users
  async getStoriesByUserId(query) {
    return await dbContext.Stories.find(query)
  }

  async getAll(query) {
    return await dbContext.Stories.find(query)
  }

  async getById(id) {
    const story = await dbContext.Stories.findById(id)
    if (!story) {
      throw new BadRequest('invalid id')
    }
    return story
  }

  async create(body) {
    return await dbContext.Stories.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const story = await dbContext.Stories.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return story
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Stories.findByIdAndDelete(id)
  }
}

export const storiesService = new StoriesService()
