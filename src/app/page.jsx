
import IntermittentShow from "@/components/Intermittent";
import Introduction from "@/components/Introduction";
import Portfolio from "@/components/Portfolio";
import SideBar from "@/components/SideBar";
import WorkButton from "@/components/WorkButton";
import Contact from "@/components/Contact";



export default function Home() { 
  return (
    <>
      <SideBar/>
      <section className="h-screen sm:py-50 flex flex-col items-center justify-center ">
        <h1 className="text-3xl text-center">{`>`}<IntermittentShow>_</IntermittentShow>{" Hello, I´m "}<span className="font-medium text-contrast">Juan Miguel Fernández.</span></h1>
        <h2 className="pt-6 text-2xl ">{`I’m a full-stack developer.`}</h2>
        <WorkButton/>
      </section>
      <Introduction/>
      <Portfolio/>
      <section className="w-full h-screen flex flex-col gap-8 bg-gradient-to-r from-transparent to-primary p-5 py-10">
        <h1 className='text-3xl'>Contact</h1>
        <Contact/>
      </section>
      
      
      
    </>
  )
}
