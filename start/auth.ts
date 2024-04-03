const SignUpController = () => import('#controllers/auth/sign_up_controller')
import router from '@adonisjs/core/services/router'

router.get('/auth/sign-up', [SignUpController, 'show']).as('sign-up.show')
router.post('/sign-up', [SignUpController]).as('sign-up')
