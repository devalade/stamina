import type { HttpContext } from '@adonisjs/core/http'

export default class SsoController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sso')
  }

  async redirect({ ally, params }: HttpContext) {
    await ally.use(params.provider).redirect()
  }

  callback({ request, response }: HttpContext) {
    return response.json({ data: 'Ok' })
  }

  unlink({ request, response }: HttpContext) {
    return response.json({ data: 'Ok' })
  }
}
