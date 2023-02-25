import { register } from '../api/auth/register.js'
export async function eventRegister() {
  console.log('eventRegister')
  const registerForm = document.querySelector('#registerForm')
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    register(
      registerForm.name.value,
      registerForm.email.value,
      registerForm.password.value,
      registerForm.avatar.value
    )
  })
}
