import type { HttpContext } from '@adonisjs/core/http'
import { registerValidator } from '#validators/auth/sign_up_validator'
import User from '#models/user'
import emitter from '@adonisjs/core/services/emitter'
import { inject } from '@adonisjs/core'
import AuthSocialService from '#services/auth_social_service'

export default class RegisterController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  @inject()
  async handle({ request, response, auth }: HttpContext, authSocialService: AuthSocialService) {
    const payload = await request.validateUsing(registerValidator)
    const username = await authSocialService.getUniqueUsername(payload.email.split('@').at(0)!)
    const user = await User.create({ ...payload, username })
    await auth.use('web').login(user)
    await emitter.emit('user:registered', user)
    return response.redirect().toRoute('verification.notice')
  }
}
