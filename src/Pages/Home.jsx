import HomeEntry from "../Components/HomeEntry"
import Houppa from "../Components/Houppa"
import Chabat from "../Components/Chabat"
import Response from "../Components/Response"

function Home() {
  return (

    <div className="home">
      <HomeEntry />
      <Houppa />
      <Chabat />
      <Response />
    </div>

  )
}

export default Home