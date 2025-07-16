import Waze from "../buttons/Waze"
import SaveTheDate from "../buttons/SaveTheDate"

function Chabat() {
    
  return (

    <div className="chabat">
      <img src="Images/fleur-1.webp" className="fleur-1" />
        <img src="Images/fleur-2.webp" className="fleur-2" />
        <img src="Images/fleur-3.webp" className="fleur-4" />
        <img src="Images/fleur-5.webp" className="fleur-5" />
        <img src="Images/fleur-2.webp" className="fleur-6" />
        <img src="Images/fleur-3.webp" className="fleur-8" />
        <img src="Images/fleur-5.webp" className="fleur-9" />
        <p className="chabat-title">Le Chabat Hatan</p>
        <img src="Images/logo-elsa-dan-home-houppa.webp" alt="" className="chabat-logo" />
        <div className="chabat-names">
            <p className='name-fille-chabat'>Elsa</p>
            <p className="and-chabat">&</p>
            <p className="name-garcon-chabat">Dan</p>
        </div>
        <p className="chabat-text">Seront ravis de partager leur Chabat avec vous qui aura lieu </p>
        <p className="chabat-date"> VENDREDI 28 ET SAMEDI 29 <br />NOVEMBRE 2025 <br /> PARACHA VAYETSÉ </p>
        <p className="chabat-endroit">AU LEONARDO PLAZA <br /> KIKAR HATSMAOUT <br /> NETANYA</p>
        <Waze lat={32.3318} long={34.8517} text={'Itineraire Waze'} />
        <SaveTheDate saveTheDate={[2025, 11, 28, 18, 30]} text={'Ajouter au calendrier'} />
    </div>

  )
}

export default Chabat