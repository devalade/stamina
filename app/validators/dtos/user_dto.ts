import type User from '#models/user'
import { inject } from '@adonisjs/core'

export type UserProfile = Pick<User, 'id' | 'email' | 'fullName' | 'avatarUrl'>

@inject()
export default class UserDTO {
  profile(user: User): UserProfile {
    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      avatarUrl: user.avatarUrl,
    }
  }
}
