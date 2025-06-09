import React from 'react'
import { useJambSubjects } from '../../api/hooks/useJambSubjects'
export default function JambSubjects() {
  const { data, isLoading } = useJambSubjects()
  if (isLoading) return <div>Loading…</div>
  return (
    <ul>
      {data.map(s => <li key={s.id}>{s.name} ({s.topics} topics)</li>)}
    </ul>
  )
}
