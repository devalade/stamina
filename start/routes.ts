/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'
/**
 * Authentication routes
 */
import { middleware } from '#start/kernel'

import './auth.js'
import UserDTO from "#validators/dtos/user_dto";

router.on('/').renderInertia('home')
router.on('/home').renderInertia('home')

router
  .get('/dashboard', ({ inertia, auth }: HttpContext) => {
    const userDTO = new UserDTO()
    return inertia.render('dashboard', { user: userDTO.profile(auth.user!) })
  })
  .use(middleware.auth())
