import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function Survey() {
    const { questionNumber } = useParams()
    const questionInt = parseInt(questionNumber)
    const questionPrecedente = questionInt <= 1 ? 1 : questionInt -1
    const questionSuivante = questionInt + 1
    const [surveyData, setSurveyData ] = useState({})
    const [isDataloading, setDataloading]=useState(false)
    const [error, setError] = useState(null)

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

    return (
        <div className="flex  flex-col  items-center ">
            <div className="flex flex-col py-50 space-y-8 mt-10p px-40 items-center rounded-xl shadow-xl/10  bg-gray-100">
                <h2 className="font-bold text-2xl underline">Question {questionNumber}</h2>
                { isDataloading?
                    (<div className="p-[10px] border-[6px] border-[#5843E4] border-b-transparent rounded-[22px] h-0 w-0 animate-spin-loader"></div>)
                    :
                    (<span className="m-[30px]">{surveyData[questionNumber]}</span>)
                }
                <div className=" ">
                    <Link className="underline" to = {`/survey/${questionPrecedente}`}> précédente </Link>
                { surveyData[questionInt + 1] ?
                 (<Link className="mx-4 underline" to = {`/survey/${questionSuivante}`}> suivantes </Link>) 
                : (<Link to = '/results' className="ml-4 underline"> Résultats </Link>)
                }
                </div> 
            </div>
        </div>
    )
}

export default Survey