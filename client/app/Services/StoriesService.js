import { ProxyState } from '../AppState.js'
import Story from '../Models/Story.js'
import { logger } from '../Utils/Logger.js'
import { api } from './AxiosService.js'

class StoriesService {
  constructor() {
    this.getAllStories()
    console.log('I have arrived')
  }

  async getAllStories() {
    try {
      const res = await api.get('api/stories')
      console.log(res.data)
      ProxyState.stories = res.data.map(s => new Story(s))
    } catch (error) {
      console.error('service', error)
    }
  }

  async read(id) {
    const story = ProxyState.stories.find(s => s.id === id)
    document.getElementById('viewport-story').innerHTML = story.Template
    console.log(story)
  }

  async createStory(rawStory) {
    const res = await api.post('api/stories', rawStory)
    console.log('service', res.data)
    ProxyState.stories = [...ProxyState.stories, new Story(res.data)]
  }

  async delete(id) {
    try {
      const res = await api.delete('api/stories/' + id)
      console.log(res.data)
    } catch (error) {
      logger.log(error)
    }
  }
}
export const storiesService = new StoriesService()
