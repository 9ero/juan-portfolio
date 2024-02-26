import SideBarElement from "./SideBarElement"



export default function SideBar(){
    const listElements = [{name: 'Introduction', position: 0},{name: 'Portfolio', position: 800},{name: 'Contact', position: 1100}]

    return <div className="invisible lg:visible fixed top-0 h-full w-auto flex justify-end items-center  p-5 self-end mr-5">
    <ul className="flex flex-col items-end gap-3 ">
    {listElements.map((element, index)=>(
        <SideBarElement  key={index} position={element.position}>{element.name} {index+1}.</SideBarElement>
    ))}
    </ul>
</div>
}