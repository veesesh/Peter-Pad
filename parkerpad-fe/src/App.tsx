
import './App.css'
import { PlusIcon } from './assets/Icons/PlusIcon'
import { ShareIcon } from './assets/Icons/ShareIcon'
import { Button } from './components/ui/Button'
import {Card} from "./components/ui/Card"

function App() {
  
  return (
    <div>
    <div className='flex justify-end gap-4 p-4'>
    <Button  
    startIcon={<ShareIcon size="lg"/>}
    variant="primary" 
    title= "Share Brain" 
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

    <div className='flex justify gap-4 p-4' >
    <Card type ="twitter" link='https://x.com/vee19twt/status/1870784835683577891' title="First Tweet"/>
    <Card type ="youtube" link='https://www.youtube.com/watch?v=_HZM0QiuUS8' title="First Youtube"/>
 
    </div>
    </div>
  )
}

export default App
