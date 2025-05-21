
import './App.css'
import { PlusIcon } from './assets/Icons/PlusIcon'
import { ShareIcon } from './assets/Icons/ShareIcon'
import { Button } from './components/ui/Button'
import {Card} from "./components/ui/Card"
import { CreateContentModal } from './components/ui/CreateContentModal'

function App() {
  
  return (

    <div className='p-4'>
    <CreateContentModal open={true}/>


    <div className='flex justify-end gap-4 p-4'>
    <Button  
    startIcon={<ShareIcon size="md"/>}
    variant="primary" 
    title= "Share Brain" 
    size="md" 
    onClick={() => console.log('clicked')} 
    />

    <Button 
    startIcon={<PlusIcon size = "md" />} 
    variant="secondary" 
    size="md" 
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
