/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router
  .get('/home', function({ inertia }) {
  return inertia.render('home')
}).as('home')

import './auth.js'
