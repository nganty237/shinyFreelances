import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey/survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances' 
import Footer from './components/Footer'
import './index.css'
import GlobalStyle from './utils/style/GlobalStyle'
import  {Themeprovider, SurveyProvider}  from './utils/context'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <BrowserRouter>
    <Themeprovider>
      <SurveyProvider>
    <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/survey/:questionNumber' element={<Survey />} />
        <Route path='/results' element={<Results />} />
        <Route path='/freelances' element={<Freelances />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
      </SurveyProvider>
      </Themeprovider>
    </BrowserRouter>
  </StrictMode>,
)
