import type { HttpContext } from '@adonisjs/core/http'
import { signUpValidator } from '#validators/auth/sign_up_validator'
import User from '#models/user'

export default class SignUpController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sign-up')
  }

  async handle({ inertia, request, response }: HttpContext) {
    const payload = await request.validateUsing(signUpValidator)
    await User.create(payload)
    return response.redirect().toRoute('sign-in')
  }
}
