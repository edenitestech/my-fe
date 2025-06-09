import React from 'react'
import { useTestimonials } from '../../api/hooks/useTestimonials'
export default function TestimonialsList() {
  const { data, isLoading } = useTestimonials()
  if (isLoading) return <div>Loading…</div>
  return (
    <ul>
      {data.map(t=>(
        <li key={t.id}>
          <strong>{t.name}</strong> ({t.role}): “{t.quote}” — {t.rating}★
        </li>
      ))}
    </ul>
  )
}
