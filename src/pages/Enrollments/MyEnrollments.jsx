import React from 'react'
import { useMyEnrollments } from '../../api/hooks/useEnrollments'
export default function MyEnrollments() {
  const { data, isLoading } = useMyEnrollments()
  if (isLoading) return <div>Loading…</div>
  return (
    <ul>
      {data.map(e => (
        <li key={e.id}>{e.course.title} (since {new Date(e.enrolled_at).toLocaleDateString()})</li>
      ))}
    </ul>
  )
}
