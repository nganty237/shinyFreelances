import { useEffect, useState } from "react";
import { Themecontext } from "./Themecontext";
import { SurveyContext } from "./Themecontext";

export const Themeprovider = ({children}) => {
    const [theme, setheme] = useState(() =>{
        const savedTheme = localStorage.getItem('theme')
        return savedTheme || 'light'
    })

    useEffect(() =>{
        localStorage.setItem('theme', theme)
    }, [theme])
    
    const  toggleTheme = () =>{
        setheme(theme === 'light' ? 'dark' : 'light') 
    }

    return(
    <Themecontext.Provider value= {{theme, toggleTheme}}>
        {children}
    </Themecontext.Provider>
)
}


// ré-exporter le contexte pour permettre des imports depuis `src/utils/context`
export { Themecontext };



export const SurveyProvider = ({children}) =>{
    const [answers, setanswers] = useState(() => {
        const savedAnswers = localStorage.getItem('answers')
        return savedAnswers ? JSON.parse(savedAnswers) : {} 
    })

    useEffect(() => {
        localStorage.setItem('answers', JSON.stringify(answers))
    }, [answers])

    const saveAnswers = (newAnwers) =>{
        setanswers({...answers, ...newAnwers})
    }

    return (
        <SurveyContext.Provider value = {{answers, saveAnswers}}>
            {children}
        </SurveyContext.Provider>
    )

}

export { SurveyContext };