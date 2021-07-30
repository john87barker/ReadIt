export default class Account {
  constructor({ email, name, picture }) {
    this.email = email || 'example@example.com'
    this.name = name || 'Example McGee'
    this.picture = picture || 'https://place-hold.it/200'
  }
}
