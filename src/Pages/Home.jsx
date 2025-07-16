import HomeEntry from "../Components/HomeEntry"
import Houppa from "../Components/Houppa"
import Chabat from "../Components/Chabat"
import Response from "../Components/Response"
import Eta from "../Components/Eta"

function Home() {
  return (

    <div className="home">
      <HomeEntry />
      <Houppa />
      <Chabat />
      <Response />
      <Eta />
      <a target="_blank" href="https://azmana.fr" className="azmana-link">Réalisé avec amour par Azmana</a>
    </div>

  )
}

export default Home