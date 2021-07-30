export default class Comment {
  constructor({ accountId, storyId, body, id, upVote, downVote }) {
    this.accountId = accountId
    this.storyId = storyId
    this.body = body
    this.id = id
    this.upVote = upVote
    this.downVote = downVote
  }

  get Template() {
    return `
     <div class="my-1 col-12 d-flex align-items-start p-2 bg-light" >
                  <div class="px-2 d-flex flex-column"><i class="mdi mdi-book-plus-multiple-outline"></i><span>${this.upVote - this.downVote} </span><i class="mdi mdi-book-minus-multiple"></i></div>
                  <div class="d-flex flex-column">
                    <small>${this.accountId.name}</small>
                <h6 class="py-1">${this.body}</h6>
                  </div>
                </div>
    `
  }
}
