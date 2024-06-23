import { test } from '@japa/runner'
import { Page } from 'playwright'

let registerPage: Page

test.group('Auth register', (group) => {
  group.each.setup(async (handler) => {
    registerPage = await handler.context.visit('/register')
  })
  test('see register page', async ({ visit }) => {
    registerPage = await visit('/register')

    await registerPage.assertTextContains('body', 'Register')
  })
  test('create a user account with wrong firstName', async ({ assert }) => {
    await registerPage.locator('#firstName').fill('jh')
    await registerPage.locator('#lastName').fill('Doe')
    await registerPage.locator('#email').fill('john@doe')
    await registerPage.locator('#password').fill('123')
    await registerPage.locator('#registerButton').click()
    await registerPage.waitForSelector('#firstName')

    assert.isTrue(await registerPage.isVisible('#firstName-error'))
  })
  test('create a user account with wrong lastName', async ({ assert }) => {
    await registerPage.locator('#firstName').fill('john')
    await registerPage.locator('#lastName').fill('Do')
    await registerPage.locator('#email').fill('john@doe')
    await registerPage.locator('#password').fill('123')
    await registerPage.locator('#registerButton').click()
    await registerPage.waitForSelector('#lastName')

    assert.isTrue(await registerPage.isVisible('#lastName-error'))
  })
  test('create a user account with wrong email', async ({ assert }) => {
    await registerPage.locator('#firstName').fill('John')
    await registerPage.locator('#lastName').fill('Doe')
    await registerPage.locator('#email').fill('john@doe')
    await registerPage.locator('#password').fill('123')
    await registerPage.locator('#registerButton').click()
    await registerPage.waitForSelector('#email')

    assert.isTrue(await registerPage.isVisible('#email-error'))
  })
  test('create a user account with wrong password', async ({ assert }) => {
    await registerPage.locator('#firstName').fill('john')
    await registerPage.locator('#lastName').fill('Doe')
    await registerPage.locator('#email').fill('john@doe')
    await registerPage.locator('#password').fill('123')
    await registerPage.locator('#registerButton').click()
    await registerPage.waitForSelector('#password')

    assert.isTrue(await registerPage.isVisible('#password-error'))
  })
  test('create a user account with no strong password', async ({ assert }) => {
    await registerPage.locator('#firstName').fill('john')
    await registerPage.locator('#lastName').fill('Doe')
    await registerPage.locator('#email').fill('john@doe')
    await registerPage.locator('#password').fill('12345678')
    await registerPage.locator('#registerButton').click()
    await registerPage.waitForSelector('#password')

    assert.isTrue(await registerPage.isVisible('#password-error'))
  })
  test('create a user account', async () => {
    await registerPage.locator('#firstName').fill('john')
    await registerPage.locator('#lastName').fill('Doe')
    await registerPage.locator('#email').fill('john@doe.com')
    await registerPage.locator('#password').fill('Pa$$w0rd!')
    await registerPage.locator('#registerButton').click()
    await registerPage.waitForURL('/verify-email')

    // TODO: test if the mail is ent successfully

    await registerPage.assertTextContains('body', 'Resend Verification Email')
  })
})
