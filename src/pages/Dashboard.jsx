import React from 'react'
import { useQuery } from '@tanstack/react-query'
import api from '../api/axios'

export default function Dashboard() {
  const { data, isLoading } = useQuery(['dashboard'], () => api.get('auth/dashboard/').then(r=>r.data))
  if (isLoading) return <div>Loading…</div>
  return (
    <div>
      <h2>Dashboard ({data.role})</h2>
      {data.role === 'student' ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  )
}
