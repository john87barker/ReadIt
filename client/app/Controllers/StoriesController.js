import { ProxyState } from '../AppState.js'
import { picsumApi } from '../Services/AxiosService.js'
import { storiesService } from '../Services/StoriesService.js'
import Story from '../Models/Story.js'

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
    // _draw()
  }

  read(id) {
    console.log('you are trying to read:', id)
    storiesService.read(id)
  }

  async getRandomImg() {
    // Parses random ID into the picsum API
    const randomNum = Math.floor(Math.random() * 1000)
    const res = await picsumApi.get(`${randomNum}/info`)

    document.getElementById('random-image').innerHTML = `
      <img src="${res.data.download_url}" class="img-fluid img-viewport" alt="">
    `
    ProxyState.image = res.data
    console.log('story controller fired', ProxyState.account, ProxyState.image)
  }

  async create() {
    // event.preventDefault()
    const form = event.target
    const rawStory = {
      accountId: ProxyState.account._id,
      title: form.title.value,
      body: form.body.value,
      imgUrl: ProxyState.image.download_url

    }
    console.log(rawStory, new Story(rawStory))
    form.reset()
  }
}
