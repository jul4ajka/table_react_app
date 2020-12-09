import React, { useState, useCallback } from 'react'
import { withRouter } from 'react-router'
import app from '../../../config/base'
import './SignUp.css'
import Inputs from '../../UI/Inputs'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const SignUp = ({ history }) => {
  const [error, setError] = useState(null)

  const handleSignUp = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
        history.push('/')
      } catch (error) {
        setError(error.message)
      }
    },
    [history]
  )

  return (
    <div className='SignUp'>
      <form className='SignUp_form' onSubmit={handleSignUp} autoComplete='on'>
        <h1>Please sign up</h1>
        <Inputs />
        <div className='Error'>{error}</div>
        <div className='SignUp_buttons'>
          <Button variant='contained' color='secondary' type='submit'>
            Sign up
          </Button>
          <Button variant='contained' color='primary'>
            <Link to='/login' className='SignUp_link'>
              Login
            </Link>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(SignUp)
