import { Link } from "react-router-dom";
import darkLogo from "../../assets/dark-logo.png"
import lightLogo from "../../assets/light-logo.png"
import { useTheme } from "../../utils/style/hooks";
import {SurveyContext} from "../../utils/context"
import { useContext, useState } from "react";
import {Menu, Sun, Moon, X,} from "lucide-react"


function Header(){
    const { theme, toggleTheme } = useTheme()
    const {resetAnswers} = useContext(SurveyContext)
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuToggle = ()=>{
        setIsOpen(!isOpen)
    }
    return (
       <header className={`border-b fixed top-0 left-0 w-full z-50 ${theme === 'dark' ? 'border-gray-700 bg-slate-800' : 'border-gray-100 bg-white'}`} >
        <div className="flex items-center justify-between px-4 py-3 sm:px-12">
            <Link to="/">
                 <img src={theme === "dark" ? lightLogo : darkLogo} alt="Logo_shinyFreelance" 
                 className="h-10 lg:h-12"
                 ></img>
            </Link>
            <div className="flex items-center space-x-2 md:space-x-6">
                <nav className="hidden md:flex items-center space-x-6 md:space-x-8">
                    <Link to="/"  className={`hover:underline ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Home</Link>
                    <Link to="freelances" className={`hover:underline ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Profils</Link>
                    <Link to="/survey/1" onClick={resetAnswers}  className="text-white transition-colors px-4 py-2 bg-indigo-600 rounded-3xl hover:bg-indigo-700">Faire le test</Link>
                </nav>
                <button onClick={toggleTheme} className={`p-2 rounded-full border transition-colors ${theme === 'dark' ? 'border-gray-600  hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'}`} 
                aria-label="Changer le thème"
                >
                    {theme === "dark" ? <Sun color="gray"/>: <Moon color="black"/>}
                </button>
                <button onClick={handleMenuToggle} className="lg:hidden">
                    {isOpen ? <X size={35} className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} /> : <Menu size={35} className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />}
                </button>
            </div>
        </div>
                    {/* Menu Déroulant Mobile avec Animation "Slide Down" */}
            <div 
                className={`md:hidden flex flex-col px-4 font-medium overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen 
                        ? "max-h-80 pt-4 pb-6 opacity-100 border-t " + (theme === 'dark' ? 'border-gray-700' : 'border-gray-100')
                        : "max-h-0 py-0 opacity-0 border-none"
                } ${theme === 'dark' ? 'bg-slate-800 text-gray-300' : 'bg-white text-gray-500'}`}
            >
                <div className="flex flex-col space-y-4">
                    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-indigo-500">
                        Home
                    </Link>
                    <Link to="/Freelances" onClick={() => setIsOpen(false)} className="hover:text-indigo-500">
                        Profils
                    </Link>
                    <Link 
                        className="text-center text-white transition-colors py-3 bg-indigo-600 rounded-xl font-medium" 
                        to="/survey/1"
                        onClick={() => setIsOpen(false)}
                    >
                        Faire le test
                    </Link>
                </div>
            </div>

       </header>
    )
} 
 
export default Header