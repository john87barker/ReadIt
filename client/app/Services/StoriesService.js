import { ProxyState } from '../AppState'
import Story from '../Models/Story'
import { api } from './AxiosService'

class StoriesService {
  constructor() {
    this.getAllStories()
  }

  async getAllStories() {
    try {
      const res = await api.get('api/stories')
      console.log(res.data)
      ProxyState.stories = [...ProxyState.stories, new Story(res.data)]
    } catch (error) {
      console.error('service', error)
    }
  }
}
export const storiesService = new StoriesService()
