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
import './auth.js'
import { middleware } from '#start/kernel'

router
  .get('/home', function ({ inertia }) {
    return inertia.render('home')
  })
  .as('home')

router
  .get('/dashboard', ({ inertia, auth }: HttpContext) => {
    console.log({ user: auth.user! })
    return inertia.render('home')
  })
  .use(middleware.auth())
