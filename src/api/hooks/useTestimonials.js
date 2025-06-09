import { useQuery } from '@tanstack/react-query'
import api from '../axios'

export function useTestimonials() {
  return useQuery(['testimonials'], () => api.get('testimonials/').then(r => r.data))
}
