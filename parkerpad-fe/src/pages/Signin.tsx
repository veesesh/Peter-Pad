import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
export function Signin() {
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center pt-8 rounded-xl">
            <div className="bg-white rounded border min-w-48">
                <Input placeholder="Username"/> 
                <Input placeholder="Password"/>
                <div className="flex justify-center pt-4 pb-4">
                <Button variant="primary" title ="Signin" fullWidth = {false}/>

                </div>

            </div>
           
        </div>
    )
} 