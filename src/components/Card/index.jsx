import PropTypes from "prop-types"
import DefaultPicture from '../../assets/profile.png'
import { useContext } from "react";
import { Themecontext } from "../../utils/context";

function Card({ label, title, picture }) {
    const { theme } = useContext(Themecontext);
    return (
        <div className={`flex flex-col space-y-4 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} w-full max-w-xs lg:max-w-md transition duration-300 rounded-2xl hover:cursor-pointer p-4 lg:p-6 items-center justify-center`}>
            <span className={`text-lg lg:text-xl font-bold ${theme === 'dark' ? 'text-violet-400' : 'text-violet-500'}`}>{label}</span>
            <img src={picture} alt="freelance" className="h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 rounded-full" />
            <span className={`text-xl lg:text-2xl ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} font-normal text-center`}>{title}</span>
        </div>
    )
}

Card.propTypes = {
    label : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired
}

Card.defaultProps = {
    label : " ",
    title : " ",
    picture : DefaultPicture
}
 
export default Card

