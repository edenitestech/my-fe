import jwtDecode from 'jwt-decode'

export function getToken() {
  return localStorage.getItem('token')
}

export function saveToken(token) {
  localStorage.setItem('token', token)
}

export function clearToken() {
  localStorage.removeItem('token')
}

export function getUserFromToken() {
  try {
    const token = getToken()
    if (!token) return null
    return jwtDecode(token)
  } catch {
    return null
  }
}
