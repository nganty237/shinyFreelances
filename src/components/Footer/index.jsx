import { useContext } from "react";
import { Themecontext } from "../../utils/context";

function Footer(){
    const {toggleTheme , theme} = useContext(Themecontext)
    return (
        <footer className="flex flex-row items-center justify-center h-20 mt-20  space-x-4 p-4">
            <button onClick={()=>toggleTheme() } className="bg-indigo-500 rounded-xl cursor-pointer p-2">
                changer de mode: {theme==="light"? '☀️':'🌙'}</button>
        </footer>
    )
}
export default Footer