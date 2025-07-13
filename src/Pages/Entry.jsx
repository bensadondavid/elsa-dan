import { Link } from "react-router-dom"
import Countdown from '../Components/Countdown'

function Entry() {

  return (

    <div className="entry">
        <p className="bsd">בס"ד</p>
        <img src="Images/photo-entry-elsa-dan.webp" className="photo-entry" />
        <img src="Images/logo-elsa-dan.webp" className="entry-logo" />
        <Countdown />
        <Link to='/home' className="entry-link">Voir l'invitation</Link>
    </div>

  )
}

export default Entry