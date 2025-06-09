import React from 'react'
import { useCourses } from '../../api/hooks/useCourses'
import { Link } from 'react-router-dom'
export default function CourseList() {
  const { data, isLoading } = useCourses()
  if (isLoading) return <div>Loading…</div>
  return (
    <ul>
      {data.map(c => (
        <li key={c.id}>
          <Link to={`/courses/${c.id}`}>{c.title}</Link> — ${c.price}
        </li>
      ))}
    </ul>
  )
}
