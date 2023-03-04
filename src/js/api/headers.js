import storage from '../storage/index.js'

export const headers = (contentType) => {
  // getting token and creating headers object
  const token = storage.load('token')
  const headers = {}

  // adding content type if it is passed as an argument
  if (contentType) {
    headers['Content-Type'] = contentType
  }

  // adding token to headers if it exists
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  // returning headers
  return headers
}
