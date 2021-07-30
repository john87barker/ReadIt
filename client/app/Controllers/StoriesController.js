import { ProxyState } from '../AppState.js'

function _draw() {
  let template = ''
  ProxyState.stories.forEach(story => {
    template += story.PreviewTemplate
  })
  document.getElementById('previews').innerHTML = template
}
export default class StoriesController {
  constructor() {
    ProxyState.on('stories', _draw)
    _draw()
  }
}
