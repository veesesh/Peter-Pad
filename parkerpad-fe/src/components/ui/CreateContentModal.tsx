import { useState } from "react"
import { CrossIcon } from "../../assets/Icons/CrossIcon"
import { Button } from "./Button"

export function CreateContentModal({open, onClose}) {

    return (
        <div>
            {open && <div className="w-screen h-screen bg-gray-500 fixed top-0 left-0 opacity-70 flex justify-center">
                <div className="flex flex-col justify-center">
                  <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end border border-red-500" onClick = {onClose} >
                        
                            <CrossIcon size="md"/>
                         
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

function Input({onChange, placeholder}: {onChange: () => void}) {
    return (
        <div>
            <input placeholder= {placeholder} type={"text"} className="px-4 py-2 border m-2 rounded" onChange={onChange} />
        </div>
    )

}