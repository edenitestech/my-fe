import React, { useState } from 'react'
import { useLogin } from '../../api/hooks/useAuth'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = useLogin()
  const nav = useNavigate()

  const onSubmit = e => {
    e.preventDefault()
    login.mutate({ email, password }, {
      onSuccess: () => nav('/dashboard')
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <Input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <Button type="submit">Login</Button>
      {login.isError && <div>Error logging in</div>}
    </form>
  )
}

