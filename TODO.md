#### NB: Make sure that you write for all the requirement

### Register
[x] - Add a register view
[x] - Plug the register to the controller
[x] - Add welcome mail
[x] - Add mail confirmation
  [x] - Add a page to redirect a user when they haven't verified they email
  [x] - redirect a user when they try to login without verifying their email [ref: Login]
[x] - Verify the email
[ ] - Add google and github sso
  [x] - add the provider key to field to the database: (provider: 'github|google', providerId, providerEmail, providerAccessToken)
  [x] - add username field: the username should be the first part of the email
  [x] - add the avatarUrl field into the user table
[-] - Write test

[ ] - add husky for linting

### Login
[x] - Add a login view
[x] - Plug the login to the controller
[ ] - Add google and github sso

## Forgot password
[ ] - Create the view to fill up the email
[ ] - Plug to the controller ( Make sure that you send a mail to the mail with a sign token )

### Reset password
[ ] - Create a view to fill up the new password (make sure that the sign token is still valid)
[ ] - Plug to the controller (Make sure you use the email in the controller)

### Dashboard
[ ] - Create view with some stats
[ ] - Create a page to handle all user in the apps
[ ] - Create a settings page
[ ] - Create a page and make sure the user can edit all his information

### Landing Page
[ ] - Reproduce the linear page


### Account switching
[ ] - Add the ability to a user to switch to another account
[ ] - Add two factors authentication email|sms|google authenticator


### Team support
[ ] - Add the ability for a user to create a team
[ ] - Add the ability for a user to invite another user with account to the teams
[ ] - Add the ability to invite a user with no account into team and make sure that he create his account
[ ] - Add the ability to ban a user from a team

# Advance part

### Subscription option
[ ] - Add the ability for an admin to manage the plan
[ ] - Add the ability for an admin to create a coupon code
[ ] - Add the ability for a user to subscribe to plan
[ ] - Add the ability for a user to cancel a subscription
[ ] - Add the ability for the system to automate the refund ( check the way of doing that )

### ACL
[ ] - Add the ability for the admin to control the action of a user ( The action should impact the UI ) 
[ ] - Add the ability for a user to control teams member roles

### Fulltext search
[ ] - Implement the fulltext search with sqlite3 (FF5)

### Add the deployment config with Docker 
[ ] - Deploy the app on Hetzner
[ ] - Deploy to fly.io
[ ] - Add litestream for sqlite database backup
[ ] - Self host sentry


### Setup sentry for monitoring the app
[ ] - add rzlain/sentry lib ( I'm not sure that it's the name)

### Create a monorepo with API and frontend framework
[ ] - Same requirement has the other one

### NextJS on front
[ ] - Implement all the frontend requirement
[ ] - Use JWT authentication

### Remix on front
[ ] - Implement all the frontend requirement
[ ] - Use JWT authentication


### Add the ability to switch between theme
- Add 5 theme to the apps


