import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { DateTime } from 'luxon'
import mail from '@adonisjs/mail/services/main'
import VerifyAccountNotification from '#mails/verify_account_notification'

export default class EmailVerificationsController {
  async verify({ request, response, params, auth, session }: HttpContext) {
    if (!request.hasValidSignature('email_verification')) {
      session.flash(
        'error',
        'Your email verification link is either invalid or expired. Please try again.'
      )
      return response.redirect().toRoute('auth.login')
    }

    if (!auth.user) {
      session.put('email_verification', request.url(true))
      return response.redirect().toRoute(
        'auth.login',
        {},
        {
          qs: {
            action: 'email_verification',
          },
        }
      )
    }

    const email = params.email
    const user = await User.findByOrFail('email', email)

    user.emailVerifiedAt = DateTime.now()

    await user.save()

    session.flash('success', 'Your email has been successfully verified, thank you!')

    return response.redirect().toPath('/dashboard')
  }

  async resendVerificationEmail({ inertia, auth }: HttpContext) {
    await mail.sendLater(new VerifyAccountNotification(auth.user!))
    return inertia.render('auth/verify_email')
  }
}
