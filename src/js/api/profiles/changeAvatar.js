import { headers } from '../headers.js'
import { apiPath } from '../constants.js'
import storage from '../../storage/index.js'
export async function changeAvatar(image, name) {
  let avatar = { avatar: image }
  avatar = JSON.stringify(avatar)
  console.log(avatar)
  const response = await fetch(`${apiPath}profiles/${name}/media`, {
    method: 'put',
    body: avatar,
    headers: headers('application/json'),
  })
  if (response.ok) {
    console.log(await response)
    storage.save('user', await response)

    return await response.json()
  }
  throw new Error(response.statusText)
}
