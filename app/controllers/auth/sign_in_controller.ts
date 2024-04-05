import User from '#models/user'
import { signInValidator } from '#validators/auth/sign_in_validator'
import type { HttpContext } from '@adonisjs/core/http'

export default class SignInController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sign_in')
  }

  async handle({ auth, request, response }: HttpContext) {
    const { email, password } = await request.validateUsing(signInValidator)
    console.log({ email })
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)

    return response.redirect().toPath('/home')
  }
}
