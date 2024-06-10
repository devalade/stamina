import User from '#models/user.js'

declare module '@adonisjs/core/types' {
  interface EventsList {
    'user:registered': User
  }
}
