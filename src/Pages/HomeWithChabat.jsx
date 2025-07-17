import HomeEntry from "../Components/HomeEntry"
import Houppa from "../Components/Houppa"
import Chabat from "../Components/Chabat"
import Response from "../Components/Response"
import Eta from "../Components/Eta"
import Musique from "../Components/Musique"

function HomeWithChabat() {
  return (

    <div className="home">
      <Musique />
      <HomeEntry />
      <Houppa />
      <Chabat />
      <Response />
      <Eta />
      <a target="_blank" href="https://azmana.fr" className="azmana-link">Réalisé avec amour par Azmana</a>
    </div>

  )
}

export default HomeWithChabat