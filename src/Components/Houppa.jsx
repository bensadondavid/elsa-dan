import Waze from '../buttons/Waze'
import SaveTheDate from '../buttons/SaveTheDate'

function Houppa() {

  return (
    
    <div className="houppa">
       <img src="Images/fleur-1.webp" className="fleur-1" />
        <img src="Images/fleur-2.webp" className="fleur-2" />
        <img src="Images/fleur-3.webp" className="fleur-4" />
        <img src="Images/fleur-5.webp" className="fleur-5" />
        <img src="Images/fleur-2.webp" className="fleur-6" />
        <img src="Images/fleur-3.webp" className="fleur-8" />
        <img src="Images/fleur-5.webp" className="fleur-9" />
        <p className="houppa-title">La cérémonie religieuse</p>
        <img src="Images/logo-elsa-dan-home-houppa.webp" alt="" className="houppa-logo" />
        <div className="parents-names">
            <div className="parents-fille">
                <p>Mme Danielle Touboul</p>
                <p>Mr Roland & Merry Claude Karsenty</p>
            </div>
            <div className="parents-garcon">
                <p>Mme Mercedes Amsellem</p>
                <p>Mr Williams & Nathalie Dray</p>
            </div>
        </div>
        <p className="houppa-text">ont la joie de vous inviter au mariage de leurs petits-enfants et enfants</p>
        <div className="houppa-names">
            <div className="names-fille">
                <p className='fille-fr'>Elsa</p>
                <p className='fille-hb'>אביגיל תמר </p>
            </div>
            <p className="houppa-and">&</p>
            <div className="names-garcon">
                <p className='garcon-fr'>Dan</p>
                <p className='garcon-hb'>חיים</p>
            </div>
        </div>
        <p className="houppa-text">Et vous prient de bien vouloir assister à la houppa ainsi qu’à la soirée qui aura lieu </p>
        <p className="houppa-date">MARDI 25 NOVEMBRE 2025 <br /> À 18h30 PRÉCISES</p>
        <p className="houppa-endroit">
            À LA SALLE ARUGOT BOSEM <br />
            כביש 4 בכניסה לפארק השרון <br />
            ISRAEL, HADERA
        </p>
        <p className="pensee">“Une pensée pleine d’amour pour ceux qui nous manquent en ce jour si spécial“</p>
        <Waze lat={32.44192} long={34.90390} text={'Itineraire Waze'} />
        <SaveTheDate saveTheDate={[2025, 11, 25, 18, 30]} text={"Ajouter au calendrier"} />
    </div>
  )

}

export default Houppa