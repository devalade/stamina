import type { HttpContext } from '@adonisjs/core/http'
import AuthSocialService from '#services/auth_social_service'
import { inject } from '@adonisjs/core'

@inject()
export default class SsoController {
  constructor(protected authSocialService: AuthSocialService) {}
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sso')
  }

  async redirect({ ally, params }: HttpContext) {
    await ally.use(params.provider).redirect()
  }

  async callback({ response, auth, params, session }: HttpContext) {
    const {
      success,
      user,
      message: formError,
    } = await this.authSocialService.getUser(params.provider)

    if (!success) {
      session.flash('errors', { form: formError })
      return response.redirect().toRoute('auth.login')
    }

    await auth.use('web').login(user!)

    return response.redirect().toPath('/dashboard')
  }

  unlink({ response }: HttpContext) {
    // TODO:
    return response.json({ data: 'Ok' })
  }
}
