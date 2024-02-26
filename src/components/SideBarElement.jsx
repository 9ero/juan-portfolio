'use client'


import { useEffect, useState } from "react"

export default function SideBarElement({ children, position }) {

    const [active, setActive] = useState(false)

    function hoverHandler() {
        window.scrollTo(0, position)
        checkPosition()
    }
    
    function checkPosition(){
        if(window.scrollY===position){
            setActive(true)
        }else{
            setActive(false)
        }
    }
    useEffect(()=>{
        checkPosition()
        const interval=setInterval(()=>{
            checkPosition()
        }, 500)
        return ()=>clearInterval(interval)
    }, [active])

    return <>
        <li onPointerEnter={hoverHandler} className={active ? ' bg-white scale-110 text-secondary p-2 transition-all pl-6 pr-10' : 'transition-all'}>{children}</li>
    </>
}