import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('username', 50).notNullable().unique()
      table.string('first_name', 50).nullable()
      table.string('last_name', 50).nullable()
      table.string('avatar_url').nullable()
      table.string('email', 255).notNullable().unique()
      table.timestamp('email_verified_at').nullable()
      table.string('password', 180).nullable()

      table.string('provider').nullable()
      table.string('provider_id').nullable()
      table.string('provider_email').nullable()
      table.string('provider_access_token').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
