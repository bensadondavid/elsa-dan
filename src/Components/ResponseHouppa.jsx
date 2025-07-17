import { useState } from "react"
import { motion } from "motion/react"

function ResponseHouppa() {
    
    const urlCloudflare = ''

    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        presence : '',
        message : ''
    })

    const handleChange = (e)=>{
        const {name, type, value, checked} = e.target
        setFormData(prev => ({
            ...prev, [name] : type === 'checkbox' ? checked : value
        }))
    }

    const handlePresence = (e) => {
        const value = e.target.value;
        setFormData(prev => ({
            ...prev,
            presence: value,
        }));
    };

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const response = await fetch(urlCloudflare, {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(data)
        }
        catch(error){
            console.log(error)
        }
    }

  return (
    
    <div className="response-container">
        <div className="fleurs-response">
            <img src="Images/fleur-4.webp" className="fleur-response-1" />
            <img src="Images/fleur-3.webp" className="fleur-response-2" />
            <img src="Images/fleur-5.webp" className="fleur-response-3" />
            <img src="Images/fleur-4.webp" className="fleur-response-4" />
            <img src="Images/fleur-3.webp" className="fleur-response-5" />
            <img src="Images/fleur-1.webp" className="fleur-response-6" />
            <img src="Images/fleur-2.webp" className="fleur-response-7" />
            <img src="Images/fleur-4.webp" className="fleur-response-8" />
        </div>
        <div className="response">
            <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="response-title">La Réponse</motion.p>
            <motion.img initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} src="Images/logo-elsa-dan-home-houppa.webp" alt="" className="response-logo" />
            <form onSubmit={handleSubmit}>
                <motion.label initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>Prénom :<br />
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input-text" />
                </motion.label>
                <motion.label initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="nom">Nom : <br />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input-text"/>
                </motion.label>
                <div className="radio">
                    <input type="radio" name="presence" value={'yes'} checked={formData.presence === 'yes'} onChange={handlePresence} className="input-radio"/>
                    <p>Assisteront</p>
                </div>
                <div className="radio">
                    <input type="radio" name="presence" value={'no'} checked={formData.presence === 'no'} onChange={handlePresence} className="input-radio"/>
                    <p>N'assisteront pas</p>
                </div>
                <label className="label-textarea">Message pour les mariés
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                </label>
                <motion.button initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} type="submit">Envoyer</motion.button>
            </form>
        </div>
    </div>

  )
}

export default ResponseHouppa