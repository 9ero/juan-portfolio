'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { TbMenu2 } from "react-icons/tb"

export default function Navbar(){
    const sections = [{name: 'Home', route: '/'}, {name: 'Projects', route: '/projects'}, {name: 'About me', route: '/about'}, {name: 'Contact', route: '/contact'},]
    const pathname = usePathname()
    const [expanded, setExpanded] = useState(false)
    const [first, setFirst] = useState(true)
    
  
    function clickHandler(state){
        setExpanded(state)
    }
    function scrollHanlder(){
        if(window.scrollY>250){
            return setExpanded(false)
        }
        if(window.innerWidth<640){
            return setExpanded(false)
        }
        return setExpanded(true)
    }

    function CheckDeviceWith(){
        
        if(window.innerWidth>640&first){
            return setExpanded(true)
        }
        return
    }

    useEffect(()=>{
        CheckDeviceWith()
        setFirst(false)
        window.addEventListener("scroll", scrollHanlder);
        return ()=>window.removeEventListener("scroll", scrollHanlder)
    },[expanded])

   if(expanded){
    return (<>
    <ul onClick={()=>clickHandler(false)} className="flex self-center flex-col items-center sm:flex-row justify-center w-screen h-screen sm:w-fit sm:h-fit gap-10 sm:border-white sm:border-2 sm:px-10 sm:py-2 bg-primary-transparent backdrop-blur transition-">
            {
                sections.map((item, index) =>{
                    return <li key={index}><Link className={``} href={item.route}><p className={`text-base hover:font-semibold hover:text-lg  p-5  ${pathname===item.route&& 'text-xl font-medium'}`}>{item.name}</p></Link></li>
                })
            }
    </ul>
    

    </>)
    }else{
        return <p onMouseEnter={()=>clickHandler(true)} onClick={()=>clickHandler(true)} className="text-2xl flex self-end items-center  p-2 sm:p-5 border-2 border-white gap-2 mr-10 mt-5 bg-primary-transparent backdrop-blur"> <span className="text-lg">Menu</span><TbMenu2 /></p>
    }
}