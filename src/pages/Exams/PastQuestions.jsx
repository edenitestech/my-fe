import React, { useState } from 'react'
import { usePastQuestions } from '../../api/hooks/usePastQuestions'
export default function PastQuestions() {
  const [year, setYear] = useState('')
  const { data, isLoading } = usePastQuestions({ year })
  if (isLoading) return <div>Loading…</div>
  return (
    <>
      <h2>Past Questions</h2>
      <input placeholder="Year" value={year} onChange={e=>setYear(e.target.value)} />
      <ul>{data.map(q=> <li key={q.id}>{q.question_text}</li>)}</ul>
    </>
  )
}
