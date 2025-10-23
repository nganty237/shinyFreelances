import Card from '../../components/Card'
// import DefaultPicture from '../../assets/profile.png' 
import { useEffect, useState } from 'react'

 


function Freelances() {
    const [freelancesList, setfreelances] = useState([])
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(null)
useEffect(() => {
    async function datafreelances(){
        setloading(true)
        try {
            const response = await fetch(`http://localhost:8000/freelances`)
            const {freelancersList} = await response.json()
            // console.log("data", data)
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

return (
  <div>
    {loading ? (
      <div className="flex items-center justify-center h-screen">
        <div className="p-[10px] border-[6px] border-[#5843E4] border-b-transparent rounded-[22px] h-0 w-0 animate-spin-loader"></div>
      </div>
    ) : (
      <div>
        <h1 className="text-black font-bold text-center text-2xl pb-15">
          Trouvez votre prestataire
        </h1>
        <h2 className="text-xl font-medium pb-20 text-gray-400 text-center">
          Chez Shiny nous réunissons les meilleurs profils pour vous.
        </h2>
        <div className="grid grid-cols-3 gap-4 mx-auto gap-y-6 p-6 row-auto items-center justify-items-center">
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