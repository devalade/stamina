const SignUpController = () => import('#controllers/auth/sign_up_controller')
const SignInController = () => import('#controllers/auth/sign_in_controller')
import { HttpContext } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'

router.get('/sign-up', [SignUpController, 'show']).as('sign-up.show')
router.post('/sign-up', [SignUpController]).as('sign-up')

router.get('/sign-in', [SignInController, 'show']).as('sign-in.show')
router.post('/sign-in', [SignInController]).as('sign-in')

router.get('/legal/acceptable_use', function ({ inertia }: HttpContext) {
  return inertia.render('legal/acceptable-use')
})

router.get('/legal/privacy-policy', function ({ inertia }: HttpContext) {
  return inertia.render('legal/privacy_policy')
})

router.get('/legal/terms-of-service', function ({ inertia }: HttpContext) {
  return inertia.render('legal/term_of_service')
})
