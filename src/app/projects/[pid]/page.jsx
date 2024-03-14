import { projectList } from "@/components/Projects"
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function ProjectPage({ params }) {
    const projects = projectList;
    function compareId(_, index) {
        return index === parseInt(params.pid)

    }
    const project = projects.find(compareId)

    return <div className="min-h-screen w-full flex flex-col justify-center items-center md:border-2 ">
        <Link href='/projects' className="flex items-center gap-2 p-3 ml-28 self-start"><MdArrowBack /> Back</Link>
        <div className="min-h-full w-full flex flex-col md:flex-row justify-center items-center gap-5 w">
            <div className="w-5/6  sm:w-2/3 lg:w-1/3  border-2 border-white px-10 py-10 flex flex-col gap-8">
                {
                    project&&<Image src={project.image} alt={project.title}/>
                }
            </div>
            <div className="w-5/6  sm:w-2/3 lg:w-1/3  border-2 border-white px-10 py-10 flex flex-col gap-8">
                <h1>{project ? project.title : 'Project not fount'}</h1>
                <h2>{project ? project.description : <Link className="border-2 border-white px-5 py-3 hover:bg-white hover:text-secondary" href={'/'}>Go home</Link>}</h2>
            </div>
        </div>
    </div>
}