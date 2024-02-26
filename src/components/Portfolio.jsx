import Projects from "@/components/Projects";
import Link from "next/link";

export default function Portfolio(){
    return <div className="flex flex-col md:flex-row w-full justify-center mt-8 gap-8">
        <div className="w-full md:w-3/4 lg:w-3/5 md:border-2 border-white p-5 py-10">
            <Link href='/projects' className="hover:text-contrast"><h1 className="text-3xl pb-5">Projects</h1></Link>
            <Projects/>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/5 bg-secondary md:border-2 border-white p-5">
            <h1>Skills</h1>
        </div>
    
</div>
}