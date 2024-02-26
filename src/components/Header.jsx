
export default function Header() {
    return <nav className="z-10 flex sm:flex-row flex-col justify-center fixed w-full top-0 text-white">
        <ul className="flex flex-col sm:flex-row justify-center sm:justify-evenly bg-primary border-2 border-white py-4 sm:w-4/5 md:w-3/5  sm:mt-10 text-lg  items-center">
            <li className="">Home</li>
            <li>Projects</li>
            <li>About Me</li>
            <li>skills</li>
            <li>Contact</li>
        </ul>
    </nav>
}