import { ProxyState } from '../AppState.js'
import Story from '../Models/Story.js'
import { api } from './AxiosService.js'

class StoriesService {
  constructor() {
    this.getAllStories()
    console.log('I have arrived')
  }

  async getAllStories() {
    try {
      const res = await api.get('stories')
      console.log(res.data)
      ProxyState.stories = res.data.map(s => new Story(s))
    } catch (error) {
      console.error('service', error)
    }
  }
}
export const storiesService = new StoriesService()
