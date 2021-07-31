import { ProxyState } from '../AppState.js'

export default class Story {
  constructor({ accountId, upVote = 0, downVote = 0, title, body, imgUrl, id }) {
    this.title = title
    this.body = body
    this.accountId = accountId
    this.upVote = upVote
    this.downVote = downVote
    this.imgUrl = imgUrl || 'https://picsum.photos/300'
    this.id = id || null
  }

  get PreviewTemplate() {
    console.log('a story preview was drawn')
    return `
    <div class="my-1 col-12 d-flex align-items-start p-2 bg-light">
              <div class="px-2 d-flex flex-column">
                <i class="mdi mdi-book-plus-multiple-outline"></i><span>${this.upVote - this.downVote}</span><i class="mdi mdi-book-plus-multiple"></i>
              </div>
              <div class="action w-100"  onclick="app.storiesController.read('${this.id}')">
                <img src="${this.imgUrl}" class="float-left img-preview img-fluid p-2">
              <div class="d-flex flex-column">
                <small>NAME</small>
                <h5 class="mt-1">${this.title}</h5>
                <h6>
                  ${this.body}
                </h6>
              </div>
              </div>
            </div>`
  }

  get Template() {
    return `
      <div>
                    <img class="img-fluid img-viewport float-left m-3" src="${this.imgUrl}"></img>
                  <h2 class="text-center">${this.title}</h2>
                  <div>
                    <p>${this.body}</p>
                  </div>
                  </div>
                  ${this.accountId === ProxyState.account._id ? `<p class="action" onclick="app.storiesController.delete('${this.id}')"> delete </p>` : ''}
                  <div class="card-body border-top col-12">
                    <form onsubmit="app.commentsController.createComment('${this.id}')" class="row" action="">
                      <small>Comment:</small>
                      <div class="input-group">
                        <textarea name="body"class="form-control" aria-label="With textarea"></textarea>
                        <button class="btn btn-secondary" type="submit">SUBMIT</button>
                    </div>
                    </form>
                  </div>
                  `
  }
}
