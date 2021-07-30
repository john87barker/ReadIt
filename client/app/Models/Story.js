export default class Story {
  constructor({ userId, upVote, downVote, title, body, imgUrl, id }) {
    this.title = title
    this.body = body
    this.id = id
    this.userId = userId
    this.upVote = upVote
    this.downVote = downVote
    this.imgUrl = imgUrl || 'https://picsum.photos/300'
  }
}
