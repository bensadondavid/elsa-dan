import Waze from '../buttons/Waze'
import SaveTheDate from '../buttons/SaveTheDate'
import { motion } from "motion/react"

function Houppa() {

  return (
    
    <div className="houppa-container">
        <div className="houppa-fleurs">
            <img src="Images/fleur-1.webp" className="fleur-houppa-1" />
            <img src="Images/fleur-2.webp" className="fleur-houppa-2" />
            <img src="Images/fleur-3.webp" className="fleur-houppa-3" />
            <img src="Images/fleur-4.webp" className="fleur-houppa-4" />
            <img src="Images/fleur-2.webp" className="fleur-houppa-5" />
            <img src="Images/fleur-3.webp" className="fleur-houppa-6" />
            <img src="Images/fleur-1.webp" className="fleur-houppa-7" />
            <img src="Images/fleur-2.webp" className="fleur-houppa-8" />
            <img src="Images/fleur-3.webp" className="fleur-houppa-9" />
            <img src="Images/fleur-5.webp" className="fleur-houppa-10" />
        </div>
        <div className="houppa">
            <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="houppa-title">La cérémonie religieuse</motion.p>
            <motion.img initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} src="Images/logo-elsa-dan-home-houppa.webp" alt="" className="houppa-logo" />
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
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="names-fille">
                    <p className='fille-fr'>Elsa</p>
                    <p className='fille-hb'>אביגיל תמר </p>
                </motion.div>
                <p className="houppa-and">&</p>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}  className="names-garcon">
                    <p className='garcon-fr'>Dan</p>
                    <p className='garcon-hb'>חיים</p>
                </motion.div>
            </div>
            <p className="houppa-text">Et vous prient de bien vouloir assister à la houppa ainsi qu’à la soirée qui aura lieu </p>
            <p className="houppa-date">MARDI 25 NOVEMBRE 2025 <br /> À 18h30 PRÉCISES</p>
            <p className="houppa-endroit">
                À LA SALLE ARUGOT BOSEM <br />
                כביש 4 בכניסה לפארק השרון <br />
                ISRAEL, HADERA
            </p>
            <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="pensee">“Une pensée pleine d’amour pour ceux qui nous manquent en ce jour si spécial“</motion.p>
            <Waze lat={32.44192} long={34.90390} text={'Itineraire Waze'} />
            <SaveTheDate saveTheDate={[2025, 11, 25, 18, 30]} text={"Ajouter au calendrier"} />
        </div>
    </div>
  )

}

export default Houppa