import Projects from "@/components/Projects";
import Link from "next/link";
import SkillList from "@/components/SkillList";
import Contact from "@/components/Contact";


export default function Portfolio(){
    return <div className="flex flex-row h-screen w-full justify-center items-center mt-8 gap-8 flex-wrap">
        <div className="w-full lg:w-3/5 lg:border-2 border-white p-5 py-10 ">
            <Link href='/projects' className="hover:text-contrast"><h1 className="text-3xl pb-5">Projects</h1></Link>
            <Projects/>
        </div>
        <div className="self-center w-fit   xl:w-1/3 flex flex-col  bg-primary sm:border-2 border-white p-5 py-10">
            <h1 className="text-3xl pb-5">Skills</h1>
            <SkillList/>
        </div>
        
    
</div>
}