import { useQuery } from '@tanstack/react-query'
import api from '../axios'

export function usePastQuestions(params) {
  return useQuery(
    ['past-questions', params],
    () => api.get('exams/past-questions/', { params }).then(r => r.data)
  )
}
