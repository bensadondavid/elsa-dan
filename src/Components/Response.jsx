import { useState } from "react"
import { motion } from "motion/react"
import { tailspin } from 'ldrs'

tailspin.register()

function Response() {
    
    const urlCloudflare = 'https://elsa-dan.bensadondavidn.workers.dev/'
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        type : 'with-chabat',
        firstName : '',
        lastName : '',
        presence : '',
        houppa : false,
        chabat : false,
        number : '',
        message : ''
    })

    const handleChange = (e)=>{
        const {name, type, value, checked} = e.target
        setFormData(prev => ({
            ...prev, [name] : type === 'checkbox' ? checked : (type === 'number' ? (value === '' ? '' : Number(value)) : value)
        }))
    }

    const handlePresence = (e) => {
        const value = e.target.value;
        setFormData(prev => ({
            ...prev,
            presence: value,
            ...(value === 'Non' && {
            houppa: false,
            chabat: false,
            number : '',
            message: ''
            })
        }));
    };

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            if (!formData.presence) {
            alert("Merci de sélectionner votre présence.");
            setIsLoading(false)
            return;
            }
            if (formData.presence === 'Oui' && (!formData.number || formData.number < 1)) {
            alert("Merci d'indiquer un nombre d'invités valide.");
            setIsLoading(false);
            return;
            }
            setIsLoading(true)
            const response = await fetch(urlCloudflare, {
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(data)
            if(response.ok){
                alert('Merci pour votre réponse !')
                setFormData({
                    firstName : '',
                    lastName : '',
                    presence : '',
                    houppa : false,
                    chabat : false,
                    number : '',
                    message : ''
                })
            }
            else{
                alert('Une erreur est survenue, Veuillez réessayer')
            }
        }
        catch(error){
            console.log(error)
            setIsLoading(false)
        }
        finally{
            setIsLoading(false)
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
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input-text" required />
                </motion.label>
                <motion.label initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="nom">Nom : <br />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input-text" required />
                </motion.label>
                <div className="radio">
                    <input type="radio" name="presence" value={'Oui'} checked={formData.presence === 'Oui'} onChange={handlePresence} className="input-radio"/>
                    <p>Assisteront</p>
                </div>
                {formData.presence === 'Oui' &&
                <div className="presence-yes">
                    <div className="check">
                        <input type="checkbox" name="houppa" checked={formData.houppa}  onChange={handleChange} className="input-radio"/>
                        <p>La cérémonie religieuse</p>
                    </div>    
                    <div className="check">
                        <input type="checkbox" name="chabat" checked={formData.chabat}  onChange={handleChange} className="input-radio"/>
                        <p>Le Chabat Hatan</p>
                    </div>
                    <label style={{margin : '10px 0'}}> Nombre d'invités <br />
                        <input type="number" name="number" value={formData.number} onChange={handleChange} className="input-text" required />
                    </label>
                </div>
                }
                <div className="radio">
                    <input type="radio" name="presence" value={'Non'} checked={formData.presence === 'Non'} onChange={handlePresence} className="input-radio"/>
                    <p>N'assisteront pas</p>
                </div>
                <label className="label-textarea">Message pour les mariés
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                </label>
                <motion.button initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} type="submit" disabled={isLoading} >{isLoading ? <l-tailspin size="20" stroke="5" speed="0.9" color="#857667" ></l-tailspin>  : 'Envoyer'}</motion.button>
            </form>
        </div>
    </div>

  )
}

export default Response