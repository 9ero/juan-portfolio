import { TbBrandJavascript, TbBrandVite, TbBrandSass, TbBrandCss3, TbBrandHtml5, TbBrandReact, TbBrandAndroid, TbBrandFirebase } from "react-icons/tb";
import { FaJava } from "react-icons/fa";



const textClass = "text-3xl pr-1"

export default function AddIconTo({children}){
    if(children.includes('JavaScript')) return<><TbBrandJavascript className={textClass}/>{children}</>
    if(children.includes('React')) return  <><TbBrandReact className={textClass}/>{children}</>
    if(children.includes('Vite')) return <><TbBrandVite className={textClass}/>{children}</>
    if(children.includes('Sass')) return <><TbBrandSass className={textClass}/>{children}</>
    if(children.includes('CSS')) return <><TbBrandCss3 className={textClass}/>{children}</>
    if(children.includes('HTML')) return <><TbBrandHtml5 className={textClass}/>{children}</>
    if(children.includes('Java')) return <><FaJava className={textClass}/>{children}</>
    if(children.includes('Android Studio')) return <><TbBrandAndroid className={textClass}/>{children}</>
    if(children.includes('Google Firebase')) return <><TbBrandFirebase className={textClass}/>{children}</>
    return children
}