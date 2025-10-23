import { Link } from "react-router-dom";
import Logo from "../../assets/dark-logo.png"


function Header(){
    return (
        <header>
            <nav className="flex items-center justify-between text-xl px-25 mt-2 py-4 ">
                <Link to="/"><img src={Logo} alt="Logo" className="h-10" /></Link>
                <div className="flex items-center text-gray-400 font-medium space-x-6">
                    <Link className=" rounded-sm p-1 hover:underline" to="/">Home</Link>
                    <Link className=" rounded-sm p-1 hover:underline" to="/freelances">Profils</Link>
                    <Link className="text-white  p-2 bg-indigo-600 rounded-3xl hover:underline" to="/survey/1">faire le test</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
