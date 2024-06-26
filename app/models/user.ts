import { DateTime } from 'luxon'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, computed } from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'
import { withAuthFinder } from '@adonisjs/auth'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare username: string

  @column()
  declare firstName: string | null

  @column()
  declare lastName: string | null

  @column()
  declare avatarUrl: string

  @computed()
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }

  @column()
  declare email: string

  @column.dateTime()
  declare emailVerifiedAt: DateTime | null

  @column()
  declare password: string

  /**
   * Provider
   */
  @column()
  declare provider: string

  @column()
  declare providerId: string

  @column()
  declare providerEmail: string

  @column()
  declare providerAccessToken: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
