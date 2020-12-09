import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './config/AuthProvider'
import PrivateRoute from './config/PrivateRoute'
import Login from './components/Auth/Login/Login'
import SignUp from './components/Auth/SignUp/SignUp'
import Table from './components/Table/Table'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Table} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/sign-up' component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
