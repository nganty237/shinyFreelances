import { useContext, useEffect } from "react"
import { SurveyContext } from "../../utils/context"

function Results() {
    const { answers, } = useContext(SurveyContext)

    useEffect(() => {
        // Affiche les réponses du survey dans la console
        console.log('Survey answers:', answers)
    }, [answers])

    return (
        <div className="p-6">
            <h1>Résultats</h1>
        </div>
    )
}

export default Results