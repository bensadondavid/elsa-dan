import HomeEntry from "../Components/HomeEntry"
import Houppa from "../Components/Houppa"
import Chabat from "../Components/Chabat"
import Eta from "../Components/Eta"
import Musique from "../Components/Musique"
import ResponseHouppa from "../Components/ResponseHouppa"

function Home() {
  return (

    <div className="home">
      <Musique />
      <HomeEntry />
      <Houppa />
      <ResponseHouppa />
      <Eta />
      <a target="_blank" href="https://azmana.fr" className="azmana-link">Réalisé avec amour par Azmana</a>
    </div>

  )
}

export default Home