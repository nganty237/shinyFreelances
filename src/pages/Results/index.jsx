import { useContext, } from "react"
import { SurveyContext } from "../../utils/context"
import { useFetch } from "../../utils/style/hooks"
import { Link } from "react-router-dom"
import { Themecontext } from "../../utils/context"

// cette function permet de reperer les resultats entres par l'utilisateur
function formatQueryParams(answers){
    const answersNumbers = Object.keys(answers)

    return answersNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstAnswer = index === 0
        const separator = isFirstAnswer ? '' : '&'
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}

function Results() {
    const { answers } = useContext(SurveyContext)
    const { theme } = useContext(Themecontext)
    const { data, isloading, error } = useFetch( 
      `http://localhost:8000/results?${formatQueryParams(answers)}`
    )
  
    if (error) {
      return <span>Il y a un problème</span>
    }
  
    const resultsData = data?.resultsData
  
    return isloading ? (
      <div className="flex items-center flex-col justify-center h-screen space-y-2">
        <div className="p-2.5 border-[6px] border-[#5843E4] border-b-transparent rounded-[22px] h-0 w-0 animate-spin-loader"></div>
        <p>Chargement...</p>
      </div>
    ) : (
      <div className="grid items-center justify-center">
        <h1 className={`text-2xl font-bold mb-6 pl-10 ${theme === 'dark' && 'text-white'}`}>
          Les compétences dont vous avez besoin :
          {resultsData &&
            resultsData.map((result, index) => (
              <span key={result.title} className="text-blue-500">
                {index > 0 && ', '}
                {result.title}
              </span>
            ))}
        </h1>
        <Link to="/Freelances" className="bg-indigo-700 cursor-pointer p-3 text-white text-center rounded-xl hover:bg-indigo-800 w-fit ml-10 ">
          Découvrez nos profils
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-10">
          {resultsData &&
            resultsData.map((result) => ( 
              <div
                key={result.title}
                className="p-6 bg-gray-100 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{result.title}</h3>
                <p className="text-gray-700">{result.description}</p>
              </div>
            ))}
        </div>
      </div>
    )
  }

export default Results