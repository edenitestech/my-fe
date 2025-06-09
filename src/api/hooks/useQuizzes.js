import { useQuery, useMutation } from '@tanstack/react-query'
import api from '../axios'

export function useQuiz(courseId) {
  return useQuery(['quizzes', courseId], () =>
    api.get(`courses/${courseId}/quizzes/`).then(r => r.data)
  )
}

export function useSubmitQuiz(courseId, quizId) {
  return useMutation(answers =>
    api.post(`courses/${courseId}/quizzes/${quizId}/submit/`, { answers })
  )
}
