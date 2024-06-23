import { test } from '@japa/runner'
import { Page } from 'playwright'
import User from '#models/user'
import { UserFactory } from '#database/factories/user_factory'

let loginPage: Page
let user: User
test.group('Auth login', (group) => {
  group.each.setup(async (handler) => {
    loginPage = await handler.context.visit('/login')
    user = await UserFactory.merge({ password: 'Pa$$w0rd!' }).create()
  })
  test('see login page', async () => {
    await loginPage.assertTextContains('body', 'Login')
  })
  test('login with non existing account', async ({ assert }) => {
    await loginPage.locator('#email').fill('john@doe.com')
    await loginPage.locator('#password').fill('Pa$$w0rd!')
    await loginPage.locator('#loginButton').click()
    await loginPage.waitForSelector('#email')

    assert.isTrue(await loginPage.isVisible('#email-error'))
  })
  test('login with a wrong password', async ({ assert }) => {
    await loginPage.locator('#email').fill(user.email)
    await loginPage.locator('#password').fill('00Pa$$w0rd!')
    await loginPage.locator('#loginButton').click()
    await loginPage.waitForSelector('#password')

    assert.isTrue(await loginPage.isVisible('#password-error'))
  })
})
