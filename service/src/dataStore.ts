import { Dict } from './dataTypes'

export type User = {
  username: string,
  displayName: string,
  email: string,
  checkInIntervalMinutes: number,
  contactEmail: string,
}

export class DataStore {
  private users: Dict<User>

  constructor () {
    this.users = {}
  }

  register (user: User) {
    this.users[user.username] = user
  }

  getUserByUserName (username: string): User {
    return this.users[username]
  }
}
