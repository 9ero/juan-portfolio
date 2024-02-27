import { TbBrandJavascript, TbBrandVite, TbBrandSass, TbBrandCss3, TbBrandHtml5, TbBrandReact, TbBrandAndroid, TbBrandFirebase, TbBrandNextjs } from "react-icons/tb";
import { FaJava } from "react-icons/fa";



const textClass = "text-3xl pr-1"

export const Icons =
 {
    JavaScript : <TbBrandJavascript className={textClass}/>,
    React: <TbBrandReact className={textClass}/>,
    Vite: <TbBrandVite className={textClass}/>,
    Sass: <TbBrandSass className={textClass}/>,
    CSS: <TbBrandCss3 className={textClass}/>,
    HTML: <TbBrandHtml5 className={textClass}/>,
    Java: <FaJava className={textClass}/>,
    'Android Studio': <TbBrandAndroid className={textClass}/>,
    'Google Firebase': <TbBrandFirebase className={textClass}/>,
    'Next.js':<TbBrandNextjs className={textClass}/>,
}