import type { HttpContext } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'
import mail from '@adonisjs/mail/services/main'
import VerifyAccountNotification from '#mails/verify_account_notification'
import { middleware } from '#start/kernel'
const RegisterController = () => import('#controllers/auth/register_controller')
const LoginController = () => import('#controllers/auth/login_controller')
const ResetPasswordController = () => import('#controllers/auth/reset_password_controller')
const ForgotPasswordController = () => import('#controllers/auth/forgot_password_controller')
const EmailVerificationsController = () => import('#controllers/email_verifications_controller')

/**
 * Authentication
 */
router.get('/register', [RegisterController, 'show']).as('auth.register.show')
router.post('/register', [RegisterController]).as('auth.register')
router.get('/login', [LoginController, 'show']).as('auth.login.show')
router.post('/login', [LoginController]).as('auth.login')
router
  .get('/reset-password/:email', [ResetPasswordController, 'show'])
  .as('auth.reset-password.show')
router.post('/reset-password/:email', [ResetPasswordController]).as('auth.reset-password')
router.get('/forgot-password', [ForgotPasswordController, 'show']).as('auth.forgot-password.show')
router.post('/forgot-password', [ForgotPasswordController]).as('auth.forgot-password')

/**
 * Legal information
 */
router.get('/legal/acceptable-use', function ({ inertia }: HttpContext) {
  return inertia.render('legal/acceptable-use')
})
router.get('/legal/privacy-policy', function ({ inertia }: HttpContext) {
  return inertia.render('legal/privacy_policy')
})
router.get('/legal/terms-of-service', function ({ inertia }: HttpContext) {
  return inertia.render('legal/term_of_service')
})

/**
 * Email verification
 */
router
  .get('verify-email', ({ inertia }: HttpContext) => {
    return inertia.render('auth/verify_email')
  })
  .as('verification.notice')
  .use(middleware.auth())

router
  .get(
    '/verify-email/:email',
    [EmailVerificationsController, 'verify']
  )
  .as('verification.verify')
  .use(middleware.auth())

router
  .post('/email/verification-notification', [EmailVerificationsController, 'resendVerificationEmail'])
  .use(middleware.auth())
  .as('verification.send')
