import { Fragment } from "react"
import { Icons } from "./Skills"
const Skills = [
    {name: 'React', Language: 'JavaScript', level: 'Avanced'},
    {name: 'Next.js', Language: 'JavaScript', level: 'Mid'},
    {name: 'Vite', Language: 'JavaScript', level: 'Avanced'},
    {name: 'Django', Language: 'Python', level: 'Learning'},
    {name: 'HTML', Language: 'HTML5', level: 'Avanced'},
    {name: 'CSS', Language: 'CSS3', level: 'Avanced'},
    {name: 'Android Studio', Language: 'Java', level: 'Mid'},
    {name: 'MySQL', Language: 'SQL', level: 'Mid'},
    {name: 'Google Firebase', Language: 'Java, Kotlin, JavaScript', level: 'Mid'},
]

export default function SkillList(){
    return (
    <div className="grid grid-cols-3 gap-4 items-center h-96 overflow-y-scroll">
    <h2 className="text-base">Name</h2>
    <h2 className="text-base">Language</h2>
    <h2 className="text-base">Level</h2>
    {
        Skills.map((skill, index)=>(
            <Fragment key={index}><p className="flex items-center text-base">{Icons[skill.name]}{skill.name}</p>
            <p className="flex items-center text-base">{skill.Language}</p>
            <p className={`flex items-center text-base ${skill.level.includes('Avanced') && 'text-contrast'}`}>{skill.level}</p></Fragment>
        ) ) 
    }
    </div>
    )

}