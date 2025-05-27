import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'


function App() {
  return (
    <div>
      <Dashboard/>
      <Signup/>
      <Signin/>
    </div>
  )
  
}

export default App
