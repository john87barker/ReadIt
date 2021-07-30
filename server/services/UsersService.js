import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class UsersService {
  async getById(id) {
    const user = await dbContext.Users.findById(id)
    if (!user) {
      throw new BadRequest('invalid id')
    }
    return user
  }

  async create(body) {
    return await dbContext.Users.create(body)
  }

  async edit(body) {
    await this.getById(body.id)
    const user = await dbContext.Users.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return user
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Users.findByIdAndDelete(id)
  }
}

export const usersService = new UsersService()
