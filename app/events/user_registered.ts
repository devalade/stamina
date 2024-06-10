import { BaseEvent } from '@adonisjs/core/events'
import User from '#models/user'

export default class UserRegistered extends BaseEvent {
  /**
   * Accept event data as constructor parameters
   */
  constructor(public user: User) {
    super()
  }
}
