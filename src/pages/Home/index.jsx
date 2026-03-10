import { Link } from "react-router-dom";
import illustration from "../../assets/home-illustration.svg"
import { useTheme } from "../../utils/style/hooks";
import { SurveyContext } from "../../utils/context";
import { useContext } from "react";

function Home(){
  const { theme } = useTheme();
  const {resetAnswers} = useContext(SurveyContext)
  return (
    <div className={`lg:flex justify-center mx-2`}>
      <div className={`flex flex-col-reverse lg:flex-row p-6 lg:w-full lg:max-w-10/12 lg:py-10 lg:px-30 mt-2 items-center justify-between rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} justify-between`}>
        <div className="flex-start flex-col items-center lg:items-start lg:max-w-sm space-y-6 lg:space-y-2 mb-6 lg:mb-0">
          <h1 className={`font-bold lg:text-2xl lg:pb-10 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'} lg:text-start text-start leading-relaxed`}>Reperez vos besoins on s'occupe du reste, avec les meilleurs talents</h1>
          <Link to ="/survey/1" className="p-1.5 text-white w-25 rounded-md lg:w-40 text-center lg:p-1.5 bg-indigo-600 lg:rounded-xl hover:bg-indigo-700 transition-colors"
          onClick={resetAnswers}>Faire le test</Link>
        </div>
        <img src={illustration} alt="illustration" className="w-full h-auto lg:h-70 lg:w-70 object-cover mb-6 lg:mb-0" />
      </div>
    </div>
  );
}
export default Home  