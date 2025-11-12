import Card from '../../components/Card'
// import DefaultPicture from '../../assets/profile.png' 
import { useEffect, useState, useContext } from 'react'
import { Themecontext } from '../../utils/context'

 


function Freelances() {
  const { theme } = useContext(Themecontext)
    const [freelancesList, setfreelances] = useState([])
  const [loading, setloading] = useState(false)
  const [error, setError] = useState(null)
useEffect(() => {
    async function datafreelances(){
        setloading(true)
        try {
            const response = await fetch(`http://localhost:8000/freelances`)
            const {freelancersList} = await response.json()
            setfreelances(freelancersList)
        } catch(error) {
            console.error("erreur de chargement des freelances ", error)
            setError(true)
        } finally {
            setloading(false)
        }
    }
    datafreelances()
}, [])

if (error) return <span className="flex items-center justify-center ">Oups, il y a eu un problème.</span>

return (
  <div>
    {loading ? (
      <div className="flex items-center flex-col justify-center h-screen space-y-2">
        <div className="p-2.5 border-[6px] border-[#5843E4] border-b-transparent rounded-[22px] h-0 w-0 animate-spin-loader"></div>
        <p >chargement...</p>
      </div>
    ) : (
      <div>
        <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-bold text-center lg:text-3xl lg:mb-5 lg text-2xl mb-2 mt-5`}>
          Trouvez votre prestataire
        </h1>
        <h2 className="text-xl font-medium mb-6 text-gray-400 px-10 text-center">
          Chez Shiny nous réunissons les meilleurs profils pour vous.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 mx-auto gap-y-6 px-10 pt-4 items-center justify-items-center">
          {freelancesList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              title={profile.name}
              picture={profile.picture}
              label={profile.job}
            />
          ))}
        </div>
      </div>
    )}
  </div>
)

}

export default Freelances