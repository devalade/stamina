import User from '#models/user'
import { signInValidator } from '#validators/auth/sign_in_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class LoginController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async handle({ auth, request, response, session }: HttpContext) {
    let forward: string = '/home'
    const { email, password, action } = await request.validateUsing(signInValidator)
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)

    /**
     * Check if the user need to be redirected to the confirmation
     */
    if(action === 'email_verification') {
      forward = session.get(action)
    }
    return response.redirect(forward)
  }
}
