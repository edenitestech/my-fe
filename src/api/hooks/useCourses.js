import { useQuery, useMutation } from '@tanstack/react-query'
import api from '../axios'

export function useCourses() {
  return useQuery(['courses'], () => api.get('courses/').then(r => r.data))
}

export function useCourse(id) {
  return useQuery(['course', id], () => api.get(`courses/${id}/`).then(r => r.data))
}

export function usePurchaseCourse() {
  return useMutation(courseId => api.post(`courses/${courseId}/purchase/`))
}
