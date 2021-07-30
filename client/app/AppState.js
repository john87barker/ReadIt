import { dev } from './env.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'

class AppState extends EventEmitter {
  user = {}
  account = {}
  stories = [{
    title: 'demoTitle',
    body: 'lorem ipsum professional language in the story',
    userId: 'demoUserId',
    upVote: 3,
    downVote: 2,
    imgUrl: 'https://place-hold.it/300'
  }]

  comments = [{
    userId: 'demoUserId',
    storyId: 'demoStoryId',
    body: 'lorem ipsum professional language being used',
    id: 'demoId',
    upVote: 1,
    downVote: 2
  }]

  socketData = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.ProxyState = ProxyState
}
