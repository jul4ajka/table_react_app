import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import './Table.css'
import Button from '@material-ui/core/Button'
import app from '../../config/base'

const Table = ({ history }) => {
  const handleSignOut = useCallback(
    async event => {
      event.preventDefault()

      try {
        await app.auth().signOut()
        history.push('/login')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )
  return (
    <div>
      <h1>Table here</h1>
      <Button variant='contained' color='primary' onClick={handleSignOut}>
        Sign out
      </Button>
    </div>
  )
}

export default withRouter(Table)
