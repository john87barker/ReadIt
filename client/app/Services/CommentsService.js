import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'
import { api } from './AxiosService.js'

class CommentsService {
  async createComment(rawComment) {
    const res = await api.post('api/comments', rawComment)
    console.log(res.data)
    ProxyState.comments = [...ProxyState.comments, new Comment(res.data)]
  }
}
export const commentsService = new CommentsService()
