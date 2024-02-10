'use client'

export default function WorkButton(){
    function clickHandler(){
        window.scrollTo(0, 500);
    }
    return (
        <>
            <button onClick={clickHandler} className="border-2 border-white px-8 py-2 mt-16 hover:bg-white hover:text-secondary hover:scale-110 hover:font-medium transition-all ">
                View my work
            </button>
        </>
    )
}