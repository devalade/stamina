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
    const userObject = JSON.parse(JSON.stringify(this.user))
    let href = router.makeSignedUrl(
      'verification.verify',
      {
        email: userObject.email,
      },
      {
        expiresIn: '24h',
        purpose: 'email_verification',
      }
    )

    href = env.get('APP_URL') + href
    this.message.to('test@mail.com')
    this.message.htmlView('emails/verify_email', {
      url: href,
      appName: env.get('VITE_APP_NAME'),
      lastName: this.user.lastName,
    })

    console.log({ userObject })
  }
}
