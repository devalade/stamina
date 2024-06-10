import emitter from '@adonisjs/core/services/emitter'
import logger from '@adonisjs/core/services/logger'
const SendVerificationEmail = () => import('#listeners/send_verification_email')

emitter.on('user:registered', [SendVerificationEmail])

emitter.onError((event, error) => {
  logger.info({ err: error }, 'An error occured when emitting the event %s', event)
})
