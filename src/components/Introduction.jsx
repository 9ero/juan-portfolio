import Image from "next/image";
import photoJuan from "@/assets/Images/JuanPhoto.webp"
import {BsGithub, BsFillEnvelopeFill, BsWhatsapp, BsLinkedin, BsFiletypePdf} from 'react-icons/bs'
import {FaFigma} from 'react-icons/fa'
import { Lexend_Exa } from "next/font/google";
import Link from "next/link";


const lexend = Lexend_Exa({subsets: ['latin-ext'], weight:['300',]})

export default function Introduction(){
    return <section className="h-screen w-full flex justify-center items-center">
    <div className= "w-full flex flex-col md:flex-row lg:w-4/5 md:border-2 border-white  lg:boder-white items-center">
            <div className="w-full md:w-1/2 ">
              <div className="sm:w-2/3">
                <Image priority src={photoJuan} width={'cover'} height={'auto'}  alt="Juan Miguel Fernandez's profile photo"/>
              </div>
            </div>
            <div className="w-full md:w-1/2 pt-8 md:px-16 px-5 pb-16 flex flex-col bg-primary">
              <h2 className="text-3xl font-medium mb-2">Welcome to my portfolio</h2>
              <p className="pt-2 text-lg ">My name is <span className="font-medium text-contrast text-2xl">Juan</span>, I am happy for your visit. Take a look at my projects below. </p>
              <h2 className="text-3xl font-medium  mt-6 mb-4">My contact info</h2>
                <ul className={lexend.className}>
                  <li><div className="flex text-xs md:text-sm xl:text-lg gap-3 items-center mb-3 hover:text-contrast transition-colors"><BsFillEnvelopeFill className="text-2xl"/><p>fernandezarayajuanmiguel@gmail.com</p></div></li>
                  <li><Link href={'https://wa.me/50686553812'} target="_blank" className="flex text-base sm:text-lg  gap-3 items-center hover:text-contrast transition-colors"><BsWhatsapp className="text-2xl"/><p>(506) 86553812</p></Link></li>
                </ul>
              <h2 className="text-3xl font-medium mt-6 mb-4">My social networks</h2>

              <ul className={lexend.className}>
                  <li><Link href={'https://www.linkedin.com/in/juanmiguelfernandeza'} target="_blank" className="flex text-xs md:text-sm xl:text-lg gap-3 items-center mb-3 hover:text-contrast transition-colors"><BsLinkedin className="text-2xl"/>linkedin.com/in/juanmiguelfernandeza</Link></li>
                  <li><Link href={'https://www.github.com/9ero'} target="_blank" className="flex text-base sm:text-lg gap-3 items-center mb-3 hover:text-contrast transition-colors"><BsGithub className="text-2xl"/>github.com/9ero</Link></li>
                  <li><Link href={'https://www.figma.com/@midjuan'} target="_blank" className="flex text-base sm:text-lg gap-3 items-center hover:text-contrast transition-colors"><FaFigma className="text-2xl"/>figma.com/@midjuan</Link></li>
                </ul>
                <Link href={'/'}  className=" text-center border-2 mt-6 border-white  w-52 py-2 self-center  hover:bg-white hover:text-secondary hover:scale-110 hover:font-medium transition-all">More about me</Link>
                <Link href={'/JuanFernandezCV.pdf'} locale={false} download="JuanFernandezCV" target="_blank" className="border-2 mt-6 border-white  w-56 py-2 self-center  hover:bg-white hover:text-secondary hover:scale-110 hover:font-medium transition-all flex justify-center items-center gap-1"><BsFiletypePdf className="text-2xl"/> Download my CV</Link>
            </div>
          </div>
</section>
}