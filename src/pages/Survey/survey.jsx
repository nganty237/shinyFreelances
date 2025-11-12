import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { SurveyContext } from "../../utils/context"

function Survey() {
    const { questionNumber } = useParams()
    const questionInt = parseInt(questionNumber)
    const questionPrecedente = questionInt <= 1 ? 1 : questionInt -1
    const questionSuivante = questionInt + 1
    const [surveyData, setSurveyData ] = useState({})
    const [isDataloading, setDataloading]=useState(false)
    const [error, setError] = useState(null)

    const {answers, saveAnswers } = useContext(SurveyContext)

    function saveReply(answer){
        // saveAnswers merges the new answer with existing ones in the provider
        saveAnswers({ [questionNumber]: answer })
    }

     useEffect(() =>{
        async function fetchData(){
        setDataloading(true)
        try {
            const response = await fetch(`http://localhost:8000/survey`)
            const {surveyData}= await response.json()
            setSurveyData(surveyData)
        }catch (error){
        console.error("error de chargement des données",error) 
            setError(true)
        }        finally{
            setDataloading(false)
        }
    }
    fetchData()
            }, [])
            
            // Récupérer la réponse sélectionnée pour la question actuelle
             const selectedAnswer = answers?.[questionNumber]

            if (error) return <span className="flex items-center justify-center ">Oups, il y a eu un problème.</span>

    return (
        <div className="flex  flex-col items-center justify-center ">
            <div className="flex flex-col py-50 space-y-8 mt-10p px-40 items-center">
                <h2 className="font-bold lg:text-3xl underline">Question {questionNumber}</h2>
                { isDataloading?
                    (<div className="p-2.5 border-[6px] border-[#5843E4] border-b-transparent rounded-[22px] h-0 w-0 animate-spin-loader"></div>)
                    :
                    (<span className="m-[30px] lg:text-2xl">{surveyData[questionNumber]}</span>)
                }
                <div className="flex flex-col sm:flex-row items-center mt-5 gap-4 sm:gap-6">
                    <button
                        onClick={() => saveReply(true)}
                        aria-pressed={selectedAnswer === true}
                        className={`h-10 sm:h-14 md:h-16 w-30 sm:w-28 md:w-35 rounded-2xl flex items-center justify-center bg-gray-100 shadow-md transition-transform duration-200 transform ${selectedAnswer === true ? 'ring-2 ring-blue-400 ring-inset scale-105 shadow-xl' : 'hover:scale-105'}`}>
                        Oui
                    </button>

                    <button
                        onClick={() => saveReply(false)}
                        aria-pressed={selectedAnswer === false}
                        className={`h-10 sm:h-14 md:h-16 w-30 sm:w-28 md:w-35 rounded-2xl flex items-center justify-center bg-gray-100 shadow-md transition-transform duration-200 transform ${selectedAnswer === false ? 'ring-2 ring-blue-400 ring-inset scale-105 shadow-xl' : 'hover:scale-105'}`}>
                        Non
                    </button>
                </div>
                <div className=" flex flex-row mt-10">
                    <Link className="underline lg:text-2xl" to = {`/survey/${questionPrecedente}`}> précédente </Link>
                { surveyData[questionInt + 1] ?
                 (<Link className="mx-4 underline lg:text-2xl"  to = {`/survey/${questionSuivante}`}> suivantes </Link>) 
                : (<Link to = '/results' className="ml-4 underline lg:text-2xl"> Résultats </Link>)
                }
                </div> 
            </div>
        </div>
    )
}

export default Survey