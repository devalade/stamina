import { test } from '@japa/runner'

test.group('Auth register', () => {
  test('see register page', async ({ visit }) => {
    const page = await visit('/register')
    await page.assertTextContains('body', 'Register')
  })
})
