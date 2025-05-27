import { useState } from 'react'
import { PlusIcon } from '../assets/Icons/PlusIcon'
import { ShareIcon } from '../assets/Icons/ShareIcon'
import { Button } from '../components/ui/Button'
import {Card} from "../components/ui/Card"
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { Sidebar } from '../components/ui/Sidebar'
export function Dashboard() {
  const[modalOpen, setModalOpen]  = useState(false);
  
  return ( 
    <div> 
      <Sidebar/>
    <div className='p-4 ml-72 min-h-screen bg-gray-100 border-gray-50'>

    <CreateContentModal open={modalOpen} onClose = {() => {
      setModalOpen(false);
    }}/>
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
    onClick={() => setModalOpen(true)} 
    />
    </div>

    <div className='flex justify gap-4 p-4' >

    <Card type ="twitter" link='https://x.com/vee19twt/status/1870784835683577891' title="First Tweet"/>
    <Card type ="youtube" link='https://www.youtube.com/watch?v=_HZM0QiuUS8' title="First Youtube"/>
 
    </div>
    </div>
    </div>
  )
}