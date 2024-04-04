const SignUpController = () => import('#controllers/auth/sign_up_controller')
const SignInController = () => import('#controllers/auth/sign_in_controller')
import router from '@adonisjs/core/services/router'

router.get('/sign-up', [SignUpController, 'show']).as('sign-up.show')
router.post('/sign-up', [SignUpController]).as('sign-up')

router.get('/sign-in', [SignInController, 'show']).as('sign-in.show')
router.post('/sign-in', [SignUpController]).as('sign-in')
