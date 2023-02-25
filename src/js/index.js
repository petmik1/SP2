import { eventIndex } from './events/eventIndex.js'

switch (location.pathname) {
  case '/' || '/index.html':
    await eventIndex()
  case '/Login':
  case '/Register':
  case '/profile':
    break

  default:
    break
}
