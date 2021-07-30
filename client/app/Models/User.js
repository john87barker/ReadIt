export default class User {
  constructor({ name, id, avatar }) {
    this.name = name || 'Anonymous'
    this.id = id
    this.avatar = avatar || 'https://place-hold.it/200'
  }
}
