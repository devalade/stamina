import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .trim()
      .normalizeEmail()
      .exists(async (db, value) => {
        return await db.from('users').where('email', value).first()
      }),
    password: vine.string().minLength(8).trim(),
    action: vine.string().optional(),
  })
)
