import { useQuery } from '@tanstack/react-query'
import api from '../axios'

export function useMyEnrollments() {
  return useQuery(['enrollments'], () => api.get('enrollments/').then(r => r.data))
}
