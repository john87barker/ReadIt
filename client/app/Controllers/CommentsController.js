import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'

function _draw() {

}

export default class CommentsController {
  constructor() {
    ProxyState.on('comments', _draw)
  }

  async createComment(id) {
    try {
      window.event.preventDefault()
      const form = window.event.target
      console.log('in the controller', form)
      const rawComment = {
        // @ts-ignore
        body: form.body.value,
        storyId: id
      }

      await commentsService.createComment(rawComment)
    } catch (error) {
      console.error(error)
    }
  }
}
