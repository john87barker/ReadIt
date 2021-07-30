import BaseController from '..//utils/BaseController'
import { usersService } from '../services/UsersService'

export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router

      .get('', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getById(req, res, next) {
    try {
      const user = await usersService.getById(req.params.id)
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
