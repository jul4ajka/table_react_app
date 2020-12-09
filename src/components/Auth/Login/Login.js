import React, { useState, useContext, useCallback } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from '../../../config/base.js'
import { AuthContext } from '../../../config/AuthProvider'
import './Login.css'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Inputs from '../../UI/Inputs'

const Login = ({ history }) => {
  const [error, setError] = useState(null)

  const handleLogin = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value)
        history.push('/')
      } catch (error) {
        setError(error.message)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to='/' />
  }

  return (
    <div className='Auth'>
      <form className='Auth_form' onSubmit={handleLogin} autoComplete='on'>
        <h1>Please login</h1>
        <Inputs />
        <div className='Error'>{error}</div>
        <div className='Auth_buttons'>
          <Button variant='contained' color='secondary'>
            <Link to='/sign-up' className='Auth_link'>
              Sign up
            </Link>
          </Button>
          <Button variant='contained' color='primary' type='submit'>
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(Login)
