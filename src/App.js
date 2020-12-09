import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { AuthProvider } from './config/AuthProvider'
import PrivateRoute from './config/PrivateRoute'
import Login from './components/Auth/Login/Login'
import SignUp from './components/Auth/SignUp/SignUp'
import Table from './components/Table/Table'

function App() {
  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  })
  return (
     >
      <AuthProvider>
        <Router history={history}>
          <div>
            <PrivateRoute exact path='/' component={Table} />
            <Route path='/login' component={Login} />
            <Route path='/sign-up' component={SignUp} />
          </div>
        </Router>
      </AuthProvider>
  )
}

export default App
