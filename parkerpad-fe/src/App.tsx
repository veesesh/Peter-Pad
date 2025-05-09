
import './App.css'
import { PlusIcon } from './assets/Icons/PlusIcon'
import { Button } from './components/ui/Button'

function App() {
  
  return (
    <>
    <Button startIcon={<PlusIcon/>} variant="primary" title= "Add Content" size="lg" onClick={() => console.log('clicked')} />
    <Button variant="secondary" title= "Share" size="lg" onClick={() => console.log('clicked')} />
    </>
  )
}

export default App
