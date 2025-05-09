
import './App.css'
import { PlusIcon } from './assets/Icons/PlusIcon'
import { ShareIcon } from './assets/Icons/ShareIcon'
import { Button } from './components/ui/Button'

function App() {
  
  return (
    <div className='flex justify gap-4 p-4'>
    <Button  
    startIcon={<ShareIcon size="lg"/>}
    variant="primary" 
    title= "Share" 
    size="lg" 
    onClick={() => console.log('clicked')} 
    />

    <Button 
    startIcon={<PlusIcon size = "lg" />} 
    variant="secondary" 
    size="lg" 
    title= "Add Content"  
    onClick={() => console.log('clicked')} 
    />
    </div>
  )
}

export default App
