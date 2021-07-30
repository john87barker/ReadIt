import BaseController from '..//utils/BaseController'
import Comment from '../models/Comment'
import { commentsService } from '../services/CommentsService'

export class StoriesController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getAll)
      .get('', this.getById)
      .get('/:id/users', this.getCommentsByUserId)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  // NOTE this is relationship between comments and Users
  async getCommentsByUserId(req, res, next) {
    try {
      const comments = await commentsService.getCommentsByUserId({ userId: req.params.id })
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const comments = await commentsService.getAll(req.query)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const comment = await commentsService.getById(req.params.id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const comment = await commentsService.create(req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const comment = await commentsService.edit(req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const comment = await commentsService.destroy(req.params.id)
      res.send({ message: 'You have deleted your comment :(' })
    } catch (error) {
      next(error)
    }
  }
}
