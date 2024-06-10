import User from '#models/user'
import mail from '@adonisjs/mail/services/main'
import VerifyAccountNotification from '#mails/verify_account_notification'

export default class SendVerificationEmail {
  async handle(user: User) {
    mail.send(new VerifyAccountNotification(user))
  }
}
