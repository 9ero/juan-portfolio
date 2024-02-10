import SideBar from "@/components/SideBar";
import WorkButton from "@/components/WorkButton";

export default function Home() { 
  return (
    <>
      <SideBar/>
      <div className="h-screen sm:py-50 flex flex-col items-center justify-center ">
        <h1 className="text-3xl text-center">{`>_ Hello, I´m `}<span className="font-medium text-contrast">Juan Miguel Fernández.</span></h1>
        <h2 className="pt-6 text-2xl ">{`I’m a full-stack developer.`}</h2>
        <WorkButton/>
      </div>
      <div className="h-screen" >
        holag
      </div>
    </>
  )
}
