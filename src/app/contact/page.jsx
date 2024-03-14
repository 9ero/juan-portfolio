import Contact from "@/components/Contact";
export const metadata = {
    title: "Contact - Juan Miguel's Portfolio",
    description: 'Full stack developer portfolio',
  }

export default function ContactPage(){
    
    return <div className="min-h-screen w-screen">
     <div className="min-h-screen w-full items-center  flex justify-center">
        <Contact/>
    </div>
</div>
}