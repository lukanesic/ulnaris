import React, { useEffect, useState } from 'react'
import Input from './../components/UI/Input'
import Logo from '../components/Hero/Logo'

import { auth } from '../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth'

import { useNavigate } from 'react-router'

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: { value: '', isValid: true },
    password: { value: '', isValid: true },
  })

  const inputHandler = (idenfitier, value) => {
    const val = value.target.value

    setCredentials((current) => {
      return {
        ...current,
        [idenfitier]: { value: val, isValid: true },
      }
    })
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      navigate('/admin')
    }
  }, [navigate])

  const submitLogin = async () => {
    // validacija
    const usernameIsValid = credentials.username.value.trim().length > 0
    const passwordIsValid = credentials.password.value.trim().length >= 7

    if (!usernameIsValid || !passwordIsValid) {
      setCredentials((current) => {
        return {
          username: { value: current.username.value, isValid: usernameIsValid },
          password: {
            value: current.password.value,
            isValid: passwordIsValid,
          },
        }
      })
      return
    }

    // Login auth
    try {
      const {
        user: { uid },
      } = await signInWithEmailAndPassword(
        auth,
        credentials.username.value,
        credentials.password.value
      )

      localStorage.setItem('admin', JSON.stringify(uid))
      navigate('/admin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login'>
      <Logo cls='sec' />
      <form className='login-form'>
        <Input
          placeholder='Username'
          label='Username'
          type='text'
          onChange={inputHandler.bind(this, 'username')}
          validation={credentials.username.isValid}
        />
        <Input
          placeholder='Password'
          label='Password'
          type='password'
          onChange={inputHandler.bind(this, 'password')}
          validation={credentials.password.isValid}
        />
      </form>
      <button onClick={submitLogin}>Login</button>
    </div>
  )
}

export default Login
