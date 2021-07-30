import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountsService } from '../services/AccountsService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('api/accounts')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/:id/accounts', this.getStoriesByAccountId)
  }

  async getStoriesByAccountId(req, res, next) {
    try {
      const stories = await accountsService.getStoriesByAccountId({ userId: req.params.id })
      res.send(stories)
    } catch (error) {
      next(error)
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountsService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  // async edit(req, res, next) {
  //   try {
  //     req.body.id = req.params.id
  //     const user = await accountService.edit(req.body)
  //     res.send(user)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // async destroy(req, res, next) {
  //   try {
  //     const user = await accountService.destroy(req.params.id)
  //     res.send({ message: 'deleting user' })
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}
