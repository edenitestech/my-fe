import React, { useState } from 'react'
import { useRegister } from '../../api/hooks/useAuth'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [data, setData] = useState({ fullname:'', email:'', password:'', confirmPassword:'', is_instructor:false })
  const reg = useRegister()
  const nav = useNavigate()

  const onSubmit = e => {
    e.preventDefault()
    reg.mutate(data, { onSuccess: ()=>nav('/login') })
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Register</h2>
      {['fullname','email','password','confirmPassword'].map(f=>(
        <Input
          key={f}
          type={f.toLowerCase().includes('password')?'password':'text'}
          placeholder={f}
          value={data[f]}
          onChange={e=>setData({...data,[f]:e.target.value})}
        />
      ))}
      <label>
        <input
          type="checkbox"
          checked={data.is_instructor}
          onChange={e=>setData({...data,is_instructor:e.target.checked})}
        /> Instructor?
      </label>
      <Button type="submit">Register</Button>
      {reg.isError && <div>Error registering</div>}
    </form>
  )
}
