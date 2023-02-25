import { register } from '../api/auth/register.js'
export async function eventRegister() {
  const registerForm = document.querySelector('#registerForm')
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const response = await register(
      registerForm.name.value,
      registerForm.email.value,
      registerForm.password.value,
      registerForm.avatar.value
    )
    location.href = '/pages/login.html'
  })
}
