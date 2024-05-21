import type { HttpContext } from '@adonisjs/core/http'

export default class SsoController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sso')
  }

  async handle({ request,  response }: HttpContext) {
    const email = request.input('email')

    // TODO:: Send login link to the user (10minutes max)
    return response.json({ email })
  }

  // TODO: add function to verify the login credentials in the url
  // TODO: invalidate the link if the user has logged
  // TODO: Authenticate the user
}
