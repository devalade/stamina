import vine from '@vinejs/vine'

export const signUpValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().minLength(3).maxLength(255),
    lastName: vine.string().trim().minLength(3).maxLength(255),
    email: vine
      .string()
      .email()
      .trim()
      .normalizeEmail()
      .unique(async (db, value) => {
        const user = await db.from('users').where('email', value).first()
        return !user
      }),
    password: vine.string().minLength(8).trim(),
  })
)
