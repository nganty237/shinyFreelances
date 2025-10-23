import { Link } from "react-router-dom";
import illustration from "../../assets/home-illustration.svg"
function Home(){
  return (<div className="flex justify-center ">
  <div className="flex w-full max-w-10/12 py-30 px-50 mt-30 items-center rounded-xl bg-gray-100 justify-between flex-1 ">
     <div className="flex flex-col max-w-sm">
       <h1 className="font-bold text-4xl pb-10 text-gray-700 text-start leading-relaxed">Reperez vos besoins on s'occupe du reste, avec les meilleurs talents</h1>
       <Link to ="/survey/1" className="text-white w-40 text-center p-2 bg-indigo-600 rounded-3xl hover:underline">Faire le test</Link>
     </div>
      <img src={illustration} alt="illustration" className="h-90 w-90 object-cover" />
  </div>
</div>);
}
export default Home