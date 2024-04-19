import User from '#models/user'
import env from '#start/env'
import router from '@adonisjs/core/services/router'
import { BaseMail } from '@adonisjs/mail'

export default class ResetPasswordNotification extends BaseMail {
  from = env.get('FROM')
  subject = 'Reset passowrd'

  constructor(private user: User) {
    super()
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  prepare() {
    const prefix = env.get('APP_URL')
    const suffix = router
      .builder()
      .params({ email: this.user.email })
      .makeSigned('/reset-password/:email', { expiresIn: '30m' })
    const url = `${prefix}${suffix}`

    const fullName = this.user.lastName + ' ' + this.user.lastName
    this.message.to(`${this.user.lastName} ${this.user.firstName} <${this.user.email}>`)
    this.message.htmlView('emails/reset_password_email', { url, fullName })
  }
}
