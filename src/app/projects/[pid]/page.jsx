import { projectList } from "@/components/Projects"
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function ProjectPage({ params }) {
    const projects = projectList;
    function compareId(_, index) {
        return index === parseInt(params.pid)
    }
    const project = projects.find(compareId)

    return <div className="min-h-screen w-full mt-32 flex justify-start relative">
        <Link href='/projects' className="absolute left-1/4 flex gap-2 p-3"><MdArrowBack/> Back</Link>
        
        
        
    </div>
}