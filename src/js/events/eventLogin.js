import { login } from '../api/auth/login.js'
import storage from '../storage/index.js'
export async function eventLogin() {
  // getting elements
  const loginForm = document.querySelector('#loginForm')

  // adding event listener
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    // calling login function
    const response = await login(
      loginForm.email.value,
      loginForm.password.value
    )

    // saving token and user to local storage
    storage.save('token', response.accessToken)
    storage.save('user', response)

    // redirecting to home page
    location.href = '/'
  })
}
