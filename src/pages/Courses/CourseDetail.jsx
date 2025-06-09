import React from 'react'
import { useParams } from 'react-router-dom'
import { useCourse, usePurchaseCourse } from '../../api/hooks/useCourses'
import Button from '../../components/Button'
export default function CourseDetail() {
  const { id } = useParams()
  const { data, isLoading } = useCourse(id)
  const purchase = usePurchaseCourse()

  if (isLoading) return <div>Loading…</div>
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>Category: {data.category}</p>
      <p>Price: ${data.price}</p>
      <Button onClick={()=>purchase.mutate(id)}>Enroll / Purchase</Button>
    </div>
  )
}
