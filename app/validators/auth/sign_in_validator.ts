import vine from '@vinejs/vine'

export const signInValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .trim()
      .normalizeEmail()
      .exists(async (db, value) => {
        const user = await db.from('users').where('email', value).first()
        return user
      }),
    password: vine.string().minLength(8).trim(),
    action: vine.string().optional(),
  })
)
