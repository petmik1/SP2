import { login } from '../api/auth/login.js'
import storage from '../storage/index.js'
export async function eventLogin() {
  const loginForm = document.querySelector('#loginForm')
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const response = await login(
      loginForm.email.value,
      loginForm.password.value
    )
    storage.save('token', response.accessToken)
    storage.save('user', response)
    location.href = '/'
  })
}
