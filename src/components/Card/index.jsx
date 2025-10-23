import PropTypes from "prop-types"
import DefaultPicture from '../../assets/profile.png'

function Card({ label, title, picture }) {
    return (
        <div className="flex flex-col space-y-4 gap-y-2 bg-gray-200 w-md h-55 transition duration-700 rounded-2xl hover:cursor-pointer hover:shadow-xl/10 p-4 items-center justify-center">
            <span className="text-violet-500 pr-30 text-lg font-bold ">{label}</span>
            <img src={picture} alt="freelance"  className="h-20 w-20 self-center rounded-full"/>
            <span className="text-xl text-black font-normal">{title}</span>
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

