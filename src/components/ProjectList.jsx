'use client'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import AddIconTo from "./Skills";


export default function ProjectList({ projects }) {
    const [hoverIndex, setHoverIndex] = useState(-1)

    function onHoverEnter(index) {
        setHoverIndex(index)
    }
    function onHoverOut() {
        setHoverIndex(-1)
    }



    return <div className="min-h-screen w-full mt-32 flex flex-col items-center">
        <Link href='/' >Back to home</Link>
        <h1 className="text-3xl py-10 font-medium">All projects</h1>
        <ul className="flex flex-col sm:flex-row  items-baseline justify-center gap-10">
            {projects.map((project, index) => (
                <li onMouseEnter={() => onHoverEnter(index)} onMouseLeave={onHoverOut} className="-w-full md:w-1/3 xl:w-1/4 border-2 border-white p-6 py-8 h-auto" key={index}>
                    <Image src={project.image} alt={project.title} width={'cover'} priority />
                    <h2 className="pt-3 text-2xl">{project.title} </h2>
                    <div className={`${index === hoverIndex ? 'block' : 'hidden'}`}>
                        <div className="grid grid-cols-2 gap-3 p-3 mb-5">
                            <p>Framework: </p>
                            <ul>
                                {project.frameworks.map((framework, index) => (
                                    <li key={index} className="flex items-center"><AddIconTo>{framework}</AddIconTo></li>
                                ))}

                            </ul>
                            <p>Language: </p>
                            <ul>
                                {project.languages.map((language, index) => (
                                    <li key={index} className="flex items-center"><AddIconTo>{language}</AddIconTo></li>
                                ))}

                            </ul>
                        </div>
                        <Link href={`/projects/${index}`} className="text-xl border-2 border-white  p-3 px-5 hover:bg-white hover:text-secondary mt-5 ">View more</Link>
                    </div>
                </li>
            ))}
        </ul>
    </div>
}