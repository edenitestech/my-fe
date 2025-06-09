
import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../axios'
import { useAuth } from '../../context/AuthProvider'

export function useLogin() {
  const { login } = useAuth()
  const qc = useQueryClient()

  return useMutation(
    creds => api.post('auth/login/', creds),
    {
      onSuccess: ({ data }) => {
        login(data.access)
        qc.invalidateQueries()
      }
    }
  )
}

export function useRegister() {
  return useMutation(data => api.post('auth/register/', data))
}
