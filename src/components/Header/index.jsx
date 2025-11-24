import { Link } from "react-router-dom";
import Logo from "../../assets/dark-logo.png"


function Header(){
    return (
        <header>
            <nav className="flex flex-col sm:flex-row items-center justify-between text-lg px-6 sm:px-12 mt-2 py-4">
                <Link to="/"><img src={Logo} alt="Logo" className="object-cover h-10 lg:h-15" /></Link>
                <div className="flex items-center text-gray-400 font-medium space-x-4 mt-3 sm:mt-0">
                    <Link className="rounded-sm p-1 hover:underline" to="/">Home</Link>
                    <Link className="rounded-sm p-1 hover:underline" to="/Freelances">Profils</Link>
                    <Link className="text-white p-2 bg-indigo-600 rounded-3xl" to="/survey/1">faire le test</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header