import { eventIndex } from './events/eventIndex.js'
import { eventLogin } from './events/eventLogin.js'
import { eventRegister } from './events/eventRegister.js'
import { eventProfile } from './events/eventProfile.js'

switch (location.pathname) {
  case '/' || '/index.html':
    await eventIndex()
    break
  case '/pages/login.html':
    await eventLogin()
    break
  case '/pages/register.html':
    await eventRegister()
    break
  case '/pages/profile.html':
    await eventProfile()
    break
  default:
    break
}
