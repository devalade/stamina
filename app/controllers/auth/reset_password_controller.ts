import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class ResetPasswordsController {
  async show({ inertia }: HttpContext) {
    return inertia.render('/pages/auth/reset_password')
  }

  async handle({ inertia, request, response }: HttpContext) {
    const email = request.input('email')
    const user = await User.findBy('email', email)
    await mail.send((message) => {
      message
        .to({
          address: user.email,
          name: user.fullName,
        })
        .cc({
          address: user.team.email,
          name: user.team.name,
        })
        .bcc({
          address: user.team.admin.email,
          name: user.team.admin.fullName,
        })
    })
    return inertia.render('pages/auth/signup')
  }
}
