import type { HttpContext } from '@adonisjs/core/http'
import { signUpValidator } from '#validators/auth/sign_up_validator'
import User from '#models/user'
import emitter from '@adonisjs/core/services/emitter'

export default class RegisterController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async handle({ request, response, auth }: HttpContext) {
    const payload = await request.validateUsing(signUpValidator)
    const user = await User.create(payload)
    await auth.use('web').login(user)
    await emitter.emit('user:registered', user)
    return response.redirect().toRoute('verification.notice')
  }
}
