import { Elysia } from 'elysia'
import { registerRestaurant } from './routes/register-restaurants'
import { sendAuthLink } from './routes/send-auth-links'
import { authenticateFromLink } from './routes/authenticate-from-link'

const app = new Elysia()
  .use(registerRestaurant)
  .use(sendAuthLink)
  .use(authenticateFromLink)

app.listen(3333, () => {
  console.log('HTTP server running!')
})
