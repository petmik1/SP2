export function profileUserInfo(user) {
  const avatar = document.querySelector('#avatar')
  const name = document.querySelector('#name')
  const credits = document.querySelector('#credits')
  if (user.avatar === null) {
    const avatarLogo = document.createElement('i')
    avatarLogo.classList.add('fa-solid', 'fa-user', 'm-auto')
    avatarLogo.setAttribute('id', 'profileIcon')
    avatar.append(avatarLogo)
  } else {
    const avatarImage = document.createElement('img')
    avatarImage.src = user.avatar
    avatar.append(avatarImage)
  }
  name.innerText = user.name
  credits.innerText += user.credits
}
