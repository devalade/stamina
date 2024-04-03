import type { HttpContext } from '@adonisjs/core/http'

export default class SignUpController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/signup')
  }

  async handle({ inertia, request, response }: HttpContext) {
    const payload = request.all()
    return inertia.render('pages/auth/signup')
  }
}
