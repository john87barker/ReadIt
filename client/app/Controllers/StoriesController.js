import { ProxyState } from '../AppState.js'
import { storiesService } from '../Services/StoriesService.js'

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
}
