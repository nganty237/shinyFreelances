import { Link } from "react-router-dom";
import illustration from "../../assets/home-illustration.svg"
import { useTheme } from "../../utils/style/hooks";

function Home(){
  const { theme } = useTheme();
  return (
    <div className={`lg:flex justify-center mx-4`}>
      <div className={`flex flex-col-reverse lg:flex-row p-10 lg:w-full lg:max-w-10/12 lg:py-30 lg:px-50 mt-10 items-center rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} justify-between`}>
        <div className="flex-start flex-col items-center lg:items-start lg:max-w-sm space-y-6 lg:space-y-2 mb-6 lg:mb-0">
          <h1 className={`font-bold lg:text-4xl lg:pb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-700'} lg:text-start text-start leading-relaxed`}>Reperez vos besoins on s'occupe du reste, avec les meilleurs talents</h1>
          <Link to ="/survey/1" className="p-1.5 text-white w-25 rounded-lg lg:w-40 text-center lg:p-4 bg-indigo-600 lg:rounded-3xl hover:underline">Faire le test</Link>
        </div>
        <img src={illustration} alt="illustration" className="w-full h-auto lg:h-90 lg:w-90 object-cover mb-6 lg:mb-0" />
      </div>
    </div>
  );
}
export default Home