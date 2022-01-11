import Hamburger from "hamburger-react";
import { useState } from "react";

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="z-50 fixed left-4 top-4">
         <Hamburger 
            toggled={isOpen} 
            toggle={setOpen} 
            size={24} 
            easing="ease-in" 
            duration={0.2} 
            color="#4c473b"
            onToggle={toggled => {
                console.log(toggled)
                if (toggled) {
                   <div className="z-50 absolute w-screen h-screen" ><h1>Hello World</h1></div>
                } else {
                    <div className="z-50 absolute">Hello World</div>
                }
              }}
        />
        </div>
           
    )
}

export default HamburgerMenu
