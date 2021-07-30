import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('api/account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      // .put('/:id', this.edit)
      // .delete('/:id', this.destroy)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
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
