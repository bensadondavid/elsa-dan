import Waze from "../buttons/Waze"
import SaveTheDate from "../buttons/SaveTheDate"
import { motion } from "motion/react"

function Chabat() {
    
  return (

    <div className="chabat-container">
      <div className="fleurs-chabat">
        <img src="Images/fleur-5.webp" className="fleur-chabat-1" />
        <img src="Images/fleur-3.webp" className="fleur-chabat-2" />
        <img src="Images/fleur-3.webp" className="fleur-chabat-3" />
        <img src="Images/fleur-5.webp" className="fleur-chabat-4" />
        <img src="Images/fleur-4.webp" className="fleur-chabat-5" />
        <img src="Images/fleur-1.webp" className="fleur-chabat-6" />
        <img src="Images/fleur-2.webp" className="fleur-chabat-7" />
        <img src="Images/fleur-1.webp" className="fleur-chabat-8" />
        <img src="Images/fleur-2.webp" className="fleur-chabat-9" />
      </div>
      <div className="chabat">
          <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="chabat-title">Le Chabat Hatan</motion.p>
          <motion.img initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} src="Images/logo-elsa-dan-home-houppa.webp" alt="" className="chabat-logo" />
          <div className="chabat-names">
              <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className='name-fille-chabat'>Elsa</motion.p>
              <p className="and-chabat">&</p>
              <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="name-garcon-chabat">Dan</motion.p>
          </div>
          <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="chabat-text">Seront ravis de partager leur Chabat avec vous qui aura lieu </motion.p>
          <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="chabat-date"> VENDREDI 28 ET SAMEDI 29 <br />NOVEMBRE 2025 <br /> PARACHA VAYETSÉ </motion.p>
          <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="chabat-endroit">AU LEONARDO PLAZA <br /> KIKAR HATSMAOUT <br /> NETANYA</motion.p>
          <Waze lat={32.3318} long={34.8517} text={'Itineraire Waze'} />
          <SaveTheDate saveTheDate={[2025, 11, 28, 18, 30]} text={'Ajouter au calendrier'} />
      </div>
    </div>

  )
}

export default Chabat