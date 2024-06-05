import type { HttpContext } from '@adonisjs/core/http'
import { signUpValidator } from '#validators/auth/sign_up_validator'
import User from '#models/user'
import mail from '@adonisjs/mail/services/main'
import WelcomeNotification from '#mails/welcome_notification'

export default class SignUpController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sign_up')
  }

  async handle({ request, response }: HttpContext) {
    const payload = await request.validateUsing(signUpValidator)

    const user = await User.create(payload)
    await mail.send(new WelcomeNotification(user))
    return response.redirect().toRoute('sign-in')
  }
}
