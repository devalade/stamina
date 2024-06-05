import User from '#models/user'
import env from '#start/env'
import { BaseMail } from '@adonisjs/mail'

export default class WelcomeNotification extends BaseMail {
  from = env.get('FROM')

  constructor(private readonly user: User) {
    super()
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  prepare() {
    this.message.to(this.user.email)
    this.message.htmlView('emails/welcome_email')
  }
}
