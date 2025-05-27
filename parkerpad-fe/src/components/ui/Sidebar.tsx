import { Logo } from "../../assets/Icons/Logo";
import { TwitterIcon } from "../../assets/Icons/TwitterIcon";
import { YoutubeIcon } from "../../assets/Icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return (
        <div className="h-screen bg-white border-gray w-72 fixed left-0 top-0 pl-6">
            <div className="flex text-2xl pt-8">
                <div>
                   <Logo/>
                </div>
                PARKER-PAD
            </div>
            <div className="pt-8 pl-4">
                <SidebarItem text= "Twitter" icon = {<TwitterIcon/>}/>
                <SidebarItem text= "Youtube" icon ={<YoutubeIcon/>}/>
            </div>
        </div>
    )

}