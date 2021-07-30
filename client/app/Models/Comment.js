export default class Comment {
  constructor({ userId, storyId, body, id, upVote, downVote }) {
    this.userId = userId
    this.storyId = storyId
    this.body = body
    this.id = id
    this.upVote = upVote
    this.downVote = downVote
  }
}
