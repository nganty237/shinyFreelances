import { useTheme } from "../../utils/style/hooks"
function Footer(){
    const { theme } = useTheme();
    return (
        <footer className="flex flex-row items-center justify-center h-20 ">
            <span className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>© 2025 Dyala Biginner</span>
        </footer>
    )
}

export default Footer