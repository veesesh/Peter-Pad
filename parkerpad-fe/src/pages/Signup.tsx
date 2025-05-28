import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios"
import {BACKEND_URL} from "./config"

export function Signup() {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    
    async function signup() {
        const username = usernameRef.current?.value;
        console.log(username)
        const password = passwordRef.current?.value;
       await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        
                username, 
                password

        })
        alert("you have signed up")
    }
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center pt-8 rounded-xl">
            <div className="bg-white rounded border min-w-48">
                <Input ref={usernameRef} placeholder="Username"/> 
                <Input ref= {passwordRef} placeholder="Password"/>
                <div className="flex justify-center pt-4 pb-4">
                <Button onClick= {signup} variant="primary" title ="Signup" fullWidth = {false}/>

                </div>

            </div>
           
        </div>
    )
} 