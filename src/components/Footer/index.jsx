import { useTheme } from "../../utils/style/hooks"
function Footer(){
    const { theme } = useTheme();
    return (
        <footer className={`flex flex-row items-center justify-center h-20 mt-auto ${theme === 'dark' ? 'border-gray-800 bg-gray-900 border-t' : 'border-t border-gray-100 bg-white'}`}>
            <span className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-400'}`}>© 2025 Dybala Biginner</span>
        </footer>
    )
}

export default Footer