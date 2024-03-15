'use client'


import { useEffect, useState } from "react"

export default function SideBarElement({ children, position }) {

    const [active, setActive] = useState(false)

    function hoverHandler() {
        window.scrollTo(0, position)
        checkPosition()
    }
    
    function checkPosition(){
        if(window.scrollY>=(position-400)&window.scrollY<=(position+400)){
            setActive(true)
        }else{
            setActive(false)
        }
    }

    useEffect(() => {
        checkPosition()
        const onScroll = () => {
          checkPosition()
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [active, checkPosition]);

    return <>
        <li onPointerEnter={hoverHandler} className={active ? ' bg-white scale-110 text-secondary p-2 transition-all pl-4 pr-8' : 'transition-all backdrop-blur p-1'}>{children}</li>
    </>
}