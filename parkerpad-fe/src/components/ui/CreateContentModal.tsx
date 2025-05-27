import { useState } from "react"
import { CrossIcon } from "../../assets/Icons/CrossIcon"
import { Input } from "./Input"
import { Button } from "./Button"

export function CreateContentModal({open, onClose}) {

    return (
        <div>
            {open && <div className="w-screen h-screen bg-gray-500 fixed top-0 left-0 opacity-70 flex justify-center">
                <div className="flex flex-col justify-center">
                  <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end" >
                        <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon size="md"/>

                        </div>
                        
                         
                    </div>
                    <div>
                        <Input placeholder = {"Title"}/>
                        <Input placeholder = {"Link"}/>

                    </div>
                    <div className="flex justify-center">
                    <Button variant="primary" title="Submit"/>
                    </div>
                    
                   </span>
                </div>
            </div>}

        </div>
    )
}

