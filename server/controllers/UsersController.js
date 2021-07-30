import BaseController from '..//utils/BaseController'
import { usersService } from '../services/UsersService'

export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router
    // don't need get and post
      .get('', this.getById)
      .post('', this.create)
  }

  // TODO check about calling the id
  async getById(req, res, next) {
    try {
      const user = await usersService.getById()
      res.send(user)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const user = await usersService.create(req.body)
      res.send(user)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const user = await usersService.edit(req.body)
      res.send(user)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const user = await usersService.destroy(req.params.id)
      res.send({ message: 'deleting user' })
    } catch (error) {
      next(error)
    }
  }
}
