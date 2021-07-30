export default class Story {
  constructor({ accountId, upVote, downVote, title, body, imgUrl, id }) {
    this.title = title
    this.body = body
    this.id = id
    this.accountId = accountId
    this.upVote = upVote
    this.downVote = downVote
    this.imgUrl = imgUrl || 'https://picsum.photos/300'
  }

  get PreviewTemplate() {
    console.log('a story preview was drawn')
    return `
    <div class="my-1 col-12 d-flex align-items-start p-2 bg-light">
              <div class="px-2 d-flex flex-column">
                <i class="mdi mdi-book-plus-multiple-outline"></i><span>${this.upVote - this.downVote}</span><i class="mdi mdi-book-plus-multiple"></i>
              </div>
              <div>
                <img src="${this.imgUrl}" class="img-fluid p-2">
              </div>
              <div class="d-flex flex-column">
                <small>NAME</small>
                <h5 class="mt-1">${this.title}</h5>
                <h6>
                  ${this.body}
                </h6>
              </div>
            </div>`
  }

  get Template() {
    return `
      <div>
                    <img class="img-fluid float-left m-3" src="${this.imgUrl}"></img>
                  <h2 class="text-center">${this.title}</h2>
                  <div>
                    <p>${this.body}</p>
                  </div>
                  </div>
                  `
  }
}
