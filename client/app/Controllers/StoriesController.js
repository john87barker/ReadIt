import { ProxyState } from '../AppState.js'
import { picsumApi } from '../Services/AxiosService.js'
import { storiesService } from '../Services/StoriesService.js'
import Story from '../Models/Story.js'
import { commentsService } from '../Services/CommentsService.js'
import { logger } from '../Utils/Logger.js'

function _draw() {
  console.log('draw function ran')
  let template = ''
  ProxyState.stories.forEach(story => {
    template += story.PreviewTemplate
  })
  document.getElementById('previews').innerHTML = template
}
export default class StoriesController {
  constructor() {
    ProxyState.on('stories', _draw)
    storiesService.getAllStories()
  }

  read(id) {
    console.log('you are trying to read:', id)
    storiesService.read(id)
    this.getAllCommentsByStoryId(id)
  }

  async getRandomImg() {
    // Parses random ID into the picsum API
    let res = {}
    const randomNum = Math.floor(Math.random() * 1000)
    try {
      res = await picsumApi.get(`${randomNum}/info`)
    } catch (error) {
      console.error(error)
      this.getRandomImg()
    }

    document.getElementById('random-image').innerHTML = `
      <img src="${res.data.download_url}" class="img-fluid img-viewport" alt="">
    `
    ProxyState.image = res.data
  }

  async create() {
    try {
      event.preventDefault()
      console.log(event, 'event target:', event.target)
      const form = event.target
      const rawStory = {
        accountId: ProxyState.account._id,
        title: form.title.value,
        body: form.body.value,
        imgUrl: ProxyState.image.download_url
      }
      await storiesService.createStory(new Story(rawStory))
      // eslint-disable-next-line no-undef
      $('#myModal').modal('toggle')
      // eslint-disable-next-line no-undef
      $('body').removeClass('modal-open')
      // eslint-disable-next-line no-undef
      $('.modal-backdrop').remove()
      form.reset()
    } catch (error) {
      logger.log(error)
    }
  }

  async delete(id) {
    await storiesService.delete(id)
    window.location.reload()
  }

  async getAllCommentsByStoryId(id) {
    try {
      await commentsService.getAllCommentsByStoryId(id)
    } catch (error) {
      console.error(error)
    }
  }
}
