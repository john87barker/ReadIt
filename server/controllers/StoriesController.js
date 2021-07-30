import BaseController from '..//utils/BaseController'
import Story from '../models/Story'
import { storiesService } from '../services/StoriesService'

export class StoriesController extends BaseController {
  constructor() {
    super('api/stories')
    this.router
      .get('', this.getAll)
      .get('', this.getById)
      .get('/:id/users', this.getStoriesByUserId)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  // NOTE this is relationship between stories and Users
  async getStoriesByUserId(req, res, next) {
    try {
      const stories = await storiesService.getStoriesByUserId({ userId: req.params.id })
      res.send(stories)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const stories = await storiesService.getAll(req.query)
      res.send(stories)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const story = await storiesService.getById(req.params.id)
      res.send(story)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const story = await storiesService.create(req.body)
      res.send(story)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const story = await storiesService.edit(req.body)
      res.send(story)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const story = await storiesService.destroy(req.params.id)
      res.send({ message: 'You have deleted your story :(' })
    } catch (error) {
      next(error)
    }
  }
}
