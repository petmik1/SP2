export function profileUserInfo(user) {
  // get elements
  const avatar = document.querySelector('#avatar')
  const name = document.querySelector('#name')
  const credits = document.querySelector('#credits')
  // if the user has no avatar, create a profile icon
  if (user.avatar === null) {
    const avatarLogo = document.createElement('i')
    avatarLogo.classList.add('fa-solid', 'fa-user', 'm-auto')
    avatarLogo.setAttribute('id', 'profileIcon')
    avatar.append(avatarLogo)
  }
  // if the user has an avatar, create an image element
  else {
    const avatarImage = document.createElement('img')
    avatarImage.src = user.avatar
    avatar.append(avatarImage)
  }
  // set text
  name.innerText = user.name
  credits.innerText += user.credits
}
