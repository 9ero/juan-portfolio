import SideBarElement from "./SideBarElement"



export default function SideBar(){
    const listElements = [{name: 'Introduction', position: 0},{name: 'Portfolio', position: 500},{name: 'Contact', position: 1000}]

    return <div className="invisible lg:visible fixed top-0 h-full w-auto flex justify-end items-center  p-5 self-end">
    <ul className="flex flex-col items-end gap-3">
    {listElements.map((element, index)=>(
        <SideBarElement  key={index} position={element.position}>{element.name}</SideBarElement>
    ))}
    </ul>
</div>
}