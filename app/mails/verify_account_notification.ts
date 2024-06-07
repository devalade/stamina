import { BaseMail } from '@adonisjs/mail'
import env from '#start/env'
import User from '#models/user'
import router from '@adonisjs/core/services/router'

export default class VerifyAccountNotification extends BaseMail {
  from = env.get('FROM')
  subject = 'Verify email'

  constructor(private user: User) {
    super()
  }

  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  prepare() {
    let href = router.makeSignedUrl(
      'verification.verify',
      {
        email: this.user.email,
      },
      {
        expiresIn: '24h',
        purpose: 'email_verification',
      }
    )

    console.log({ href })

    href = env.get('APP_URL') + href
    this.message.to(this.user.email)
    this.message.htmlView('emails/verify_email', {
      url: href,
      appName: env.get('VITE_APP_NAME'),
      lastName: this.user.lastName
    })
  }
}
