import ResetPasswordNotification from '#mails/reset_password_notification'
import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class ResetPasswordsController {
  async show({ inertia, request, response }: HttpContext) {
    if (!request.hasValidSignature()) {
      return response.redirect().toPath('/forgot-password')
    }
    return inertia.render('auth/reset_password')
  }

  async handle({ inertia, request, response }: HttpContext) {
    if (!request.hasValidSignature()) {
      console.log("Here we go")
      return response.redirect().toPath('/forgot-password')
    }
    const email = request.input('email')
    const user = await User.findByOrFail('email', email)
    await mail.send(new ResetPasswordNotification(user))
    return inertia.render('pages/auth/signup')
  }
}
