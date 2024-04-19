import User from '#models/user'
import { resetPasswordValidator } from '#validators/auth/reset_password_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class ResetPasswordsController {
  async show({ inertia, request, response }: HttpContext) {
    if (!request.hasValidSignature()) {
      return response.redirect().toPath('/forgot-password')
    }
    return inertia.render('auth/reset_password')
  }

  async handle({ inertia, request, response }: HttpContext) {
    if (!request.hasValidSignature()) {
      return response.redirect().toPath('/auth/forgot_password')
    }

    const { newPassword } = await request.validateUsing(resetPasswordValidator)

    const user = await User.findBy('email', request.param('email'))
    if (!user) {
      return response.redirect().toPath('/auth/sign_up')
    }

    user.password = newPassword
    await user.save()

    return response.redirect().toPath('/sign-in')
  }
}
