import { eventIndex } from './events/eventIndex.js'
import { eventLogin } from './events/eventLogin.js'
import { eventRegister } from './events/eventRegister.js'
import { eventProfile } from './events/eventProfile.js'
import { eventProduct } from './events/eventProduct.js'
import storage from './storage/index.js'

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
  case '/pages/product.html':
    await eventProduct()
    break
  default:
    break
}

// all pages
const token = storage.load('token')
if (token) {
  document.querySelector('#loginButton').style.display = 'none'
  document.querySelector('#logoutButton').style.display = 'block'
} else {
  document.querySelector('#logoutButton').style.display = 'none'
}
// logout
document.querySelector('#logoutButton').addEventListener('click', () => {
  storage.remove('token')
  storage.remove('user')
  location.href = '/'
})
