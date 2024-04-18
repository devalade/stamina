import ForgotPasswordNotification from '#mails/forgot_password_notification'
import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class ForgotPasswordsController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/reset_password')
  }

  async handle({ inertia, request, response }: HttpContext) {
    const email = request.input('email')
    const user = await User.findByOrFail('email', email)
    await mail.send(new ForgotPasswordNotification(user))
    return response.redirect().back()
  }
}

