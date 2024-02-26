'use client'

import { useEffect, useState } from "react"

export default function IntermittentShow({children}){
    const [show, setShow] =useState(false)

    

    useEffect(()=>{
        const interval = setInterval(()=>{
            setShow(!show)
        }, 600)
        return () => clearInterval(interval)
    })

    return <span className={show ? 'visible':'invisible'}>
    {children}
</span>
}