import { register } from '../api/auth/register.js'
export async function eventRegister() {
  // getting elements
  const registerForm = document.querySelector('#registerForm')

  // adding event listener
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    // calling register function
    register(
      registerForm.name.value,
      registerForm.email.value,
      registerForm.password.value,
      registerForm.avatar.value
    )
  })
}
