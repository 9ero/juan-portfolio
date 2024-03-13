import Navbar from "./Navbar";
import { Sora } from 'next/font/google'
 const sora = Sora({ subsets: ['latin'], weight: ['200','300', '400','500'] })

export default function Header() {
    return <nav className={`${sora.className} z-10 flex justify-end  fixed w-screen sm:top-10 sm:right-10 text-white`}>
        <Navbar />
    </nav>
}