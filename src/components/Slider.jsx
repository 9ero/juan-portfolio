'use client'
import Image from "next/image"
import { useState } from "react"
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import SendToRouter from "./Router";

export default function ImageSlider({ projects }) {

    const [projectIndex, setProjectIndex] = useState(0)

    function prevImage(){
        setProjectIndex(index =>{
            if(index===0) return projects.length -1
            return index - 1
        }
        )
    }

    function nextImage(){
        setProjectIndex(index =>{
            if(index===projects.length-1) return 0
            return index + 1
        }
        )
    }

    
    
    return <>
        <div className="relative overflow-hidden">

            <div className="flex" style={{translate: `${projectIndex * - 100}%`, transition: 'translate 500ms ease-in-out' }}>
                {
                    projects.map((project, index) => (
                        <Image key={index} src={project.image} width={'cover'} alt={project.title} loading="lazy" className="shrink-0"/>
                    ))
                }
            </div>
            <button onClick={prevImage} className=" text-white text-4xl absolute top-0 bottom-0 p-2 bg-gradient-to-l from-transparent to-primary hover:bg-gradient-to-l hover:from-primary-transparent hover:to-primary transition-colors duration-500"><BsArrowLeftCircleFill/></button>
            <button onClick={nextImage} className=" text-white text-4xl absolute top-0 bottom-0 right-0 p-2 bg-gradient-to-r from-transparent to-primary hover:bg-gradient-to-r hover:from-primary-transparent hover:to-primary "
            ><BsArrowRightCircleFill /></button>
            <div className="text-secondary w-auto absolute left-1/2 -translate-x-1/2 bottom-12 bg-white-transparent p-5 hidden sm:block border-2 border-primary backdrop-blur">
                <h3 className="text-xl sm:text-2xl text-center font-medium">{projects[projectIndex].title}</h3>
                <p className="text-xs sm:text-base text-center ">{projects[projectIndex].description}</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 flex gap-6 bottom-0 w-1/12 sm:1/12">
                {
                projects.map((project, index) =>(
                    <Image key={index} onClick={()=>setProjectIndex(index)} src={project.thumbnail}  width={"cover"} loading="lazy" alt={`${project.title} thumbnail`} className={` ${index===projectIndex? ' bg-white p-1  scale-150 border-2 border-primary transition-all'  : 'border-0 transition-all'}`}/>
                ))
                }
            </div>
            

        </div>
    </>
}