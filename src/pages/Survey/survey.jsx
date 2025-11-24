import {  useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { SurveyContext, Themecontext } from "../../utils/context"
import { useFetch } from "../../utils/style/hooks"

function Survey() {
    const { questionNumber } = useParams()
    const {theme} = useContext(Themecontext)
    const questionInt = parseInt(questionNumber)
    const questionPrecedente = questionInt <= 1 ? 1 : questionInt -1
    const questionSuivante = questionInt + 1

    const {answers, saveAnswers } = useContext(SurveyContext)

    const {data , isloading, error} = useFetch(`http://localhost:8000/survey`)
    const {surveyData} = data

    function saveReply(answer){
        // saveAnswers merges the new answer with existing ones in the provider
        saveAnswers({ [questionNumber]: answer })
    }

            // Récupérer la réponse sélectionnée pour la question actuelle
             const selectedAnswer = answers?.[questionNumber]

            if (error) return <span className="flex items-center justify-center ">Oups, il y a eu un problème.</span>

    return (
        <div className={`flex flex-col items-center justify-center ${theme === 'dark' && 'bg-gray-800'}`}>
            <div className="flex flex-col py-10 lg:mt-20 space-y-4 mt-5 px-10 items-center">
                <h2 className={`font-bold lg:text-3xl underline ${theme === 'dark' && 'text-white'}`}>Question {questionNumber}</h2>
                { isloading?
                    (<div className="flex items-center flex-col justify-center  space-y-2">
                        <div className="p-2.5 border-[6px] border-[#5843E4] border-b-transparent rounded-[22px] h-0 w-0 animate-spin-loader"></div>
                        <p >chargement...</p>
                    </div>)
                    :
                    (<span className={`m-4 lg:text-2xl text-center ${theme === 'dark' && 'text-white'}`}>{surveyData && surveyData[questionNumber]}</span>)
                }
                <div className="flex flex-col sm:flex-row items-center mt-5 gap-4 sm:gap-6">
                    <button
                        onClick={() => saveReply(true)}
                        aria-pressed={selectedAnswer === true}
                        className={`h-10 sm:h-14 md:h-16 w-30 sm:w-28 md:w-35 rounded-2xl flex items-center justify-center bg-gray-100 shadow-md transition-transform duration-200 transform ${selectedAnswer === true ? 'ring-2 ring-blue-400 ring-inset scale-105 shadow-xl' : 'hover:scale-105'} ${theme === 'dark' && 'bg-gray-700 text-white'}`}>
                        Oui
                    </button>

                    <button
                        onClick={() => saveReply(false)}
                        aria-pressed={selectedAnswer === false}
                        className={`h-10 sm:h-14 md:h-16 w-30 sm:w-28 md:w-35 rounded-2xl flex items-center justify-center bg-gray-100 shadow-md transition-transform duration-200 transform ${selectedAnswer === false ? 'ring-2 ring-blue-400 ring-inset scale-105 shadow-xl' : 'hover:scale-105'} ${theme === 'dark' && 'bg-gray-700 text-white'}`}>
                        Non
                    </button>
                </div>
                <div className=" flex flex-row mt-10">
                    <Link className={`underline lg:text-2xl ${theme === 'dark' && 'text-white'}`} to = {`/survey/${questionPrecedente}`}> précédente </Link>
                { surveyData?.[questionInt + 1] ?
                 (<Link className={`mx-4 underline lg:text-2xl ${theme === 'dark' && 'text-white'}`}  to = {`/survey/${questionSuivante}`}> suivantes </Link>) 
                : (<Link to = '/results' className={`ml-4 underline lg:text-2xl ${theme === 'dark' && 'text-white'}`}> Résultats </Link>)
                }
                </div> 
            </div>
        </div>
    )
}

export default Survey