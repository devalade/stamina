import type { HttpContext } from '@adonisjs/core/http'
import { signUpValidator } from '#validators/auth/sign_up_validator'
import User from '#models/user'
import mail from '@adonisjs/mail/services/main'
import WelcomeNotification from '#mails/welcome_notification'
import VerifyAccountNotification from '#mails/verify_account_notification'

export default class RegisterController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async handle({ request, response, auth }: HttpContext) {
    const payload = await request.validateUsing(signUpValidator)
    const user = await User.create(payload)
    await auth.use('web').login(user)
    await mail.send(new WelcomeNotification(user))
    await mail.send(new VerifyAccountNotification(user))
    return response.redirect().toRoute('verification.notice')
  }
}
