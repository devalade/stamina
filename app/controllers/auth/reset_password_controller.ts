import type { HttpContext } from '@adonisjs/core/http'

export default class ResetPasswordsController {
  async show({ inertia }: HttpContext) {
    return inertia.render('/pages/auth/reset_password')
  }

  async handle({ inertia, request, response }: HttpContext) {
    const payload = request.all()
    return inertia.render('pages/auth/signup')
  }
}
