import { Link } from "react-router-dom";
import illustration from "../../assets/home-illustration.svg"
function Home(){
  return (<div className="lg:flex justify-center ">
  <div className="flex-cols-1 lg:flex  px-10 lg:w-full lg:max-w-10/12 lg:py-30  lg:px-50 mt-30 items-center rounded-xl bg-gray-100 justify-between flex-1 ">
     <div className="flex flex-col lg:max-w-sm">
       <h1 className="font-bold lg:text-4xl lg:pb-10  text-gray-700 lg:text-start text-start leading-relaxed">Reperez vos besoins on s'occupe du reste, avec les meilleurs talents</h1>
       <Link to ="/survey/1" className="text-white w-25 rounded-xl lg:w-40 text-center lg:p-2 bg-indigo-600 lg:rounded-3xl hover:underline">Faire le test</Link>
     </div>
      <img src={illustration} alt="illustration" className="h-40 w-40 lg:h-90 lg:w-90 object-cover" />
  </div>
</div>);
}
export default Home