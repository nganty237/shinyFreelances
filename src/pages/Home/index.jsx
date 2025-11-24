import { Link } from "react-router-dom";
import illustration from "../../assets/home-illustration.svg"
import { useContext } from "react";
import { Themecontext } from "../../utils/context";

function Home(){
  const { theme } = useContext(Themecontext);
  return (<div className={`lg:flex justify-center mx-4`}>
  <div className={`flex-cols-1 lg:flex  p-10 lg:w-full lg:max-w-10/12 lg:py-30  lg:px-50 mt-10 items-center rounded-xl ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} justify-between  `}>
     <div className="flex flex-col lg:max-w-sm">
       <h1 className={`font-bold lg:text-4xl lg:pb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-700'} lg:text-start text-start leading-relaxed`}>Reperez vos besoins on s'occupe du reste, avec les meilleurs talents</h1>
       <Link to ="/survey/1" className="text-white w-25 rounded-xl lg:w-40 text-center lg:p-2 bg-indigo-600 lg:rounded-3xl hover:underline">Faire le test</Link>
     </div>
      <img src={illustration} alt="illustration" className="lg:h-90 lg:w-90 object-cover" />
  </div>
</div>);
}
export default Home