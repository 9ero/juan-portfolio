import ProjectList from "@/components/ProjectList";
import { projectList } from "@/components/Projects"

export default function ProjectsPage() {
    
    return <>
        <ProjectList projects={projectList}/>
    </>
}