import type { HttpContext } from '@adonisjs/core/http'

export default class SignInController {
  async show({ inertia }: HttpContext) {
    return inertia.render('/pages/auth/sign-up')
  }

  async handle({ inertia, request, response }: HttpContext) {
    const payload = request.all()
    return inertia.render('pages/auth/signup')
  }
}
