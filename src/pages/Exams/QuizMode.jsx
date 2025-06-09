import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuiz, useSubmitQuiz } from '../../api/hooks/useQuizzes'
export default function QuizMode() {
  const { quizId } = useParams()
  const { data, isLoading } = useQuiz(quizId)
  const submit = useSubmitQuiz(quizId)
  const [answers, setAnswers] = useState({})

  if (isLoading) return <div>Loading…</div>
  const onSelect = (qid, label) => setAnswers(a=>({...a,[qid]:label}))
  const onSubmit = () => submit.mutate(answers)

  return (
    <div>
      <h2>Quiz: {data.title}</h2>
      {data.questions.map(q=>(
        <div key={q.id}>
          <p>{q.question_text}</p>
          {q.options.map(o=>(
            <label key={o.id}>
              <input
                type="radio"
                name={`q${q.id}`}
                checked={answers[q.id]===o.label}
                onChange={()=>onSelect(q.id, o.label)}
              /> {o.label}. {o.text}
            </label>
          ))}
        </div>
      ))}
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}
