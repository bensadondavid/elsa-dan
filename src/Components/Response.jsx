import { useState } from "react"


function Response() {

    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        presence : '',
        houppa : false,
        chabat : false,
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
            ...(value === 'no' && {
            houppa: false,
            chabat: false,
            message: ''
            })
        }));
    };

  return (
    
    <div className="response">
        <p className="response-title">La Réponse</p>
        <img src="Images/logo-elsa-dan-home-houppa.webp" alt="" className="response-logo" />
        <form>
            <label>Prénom :<br />
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input-text" />
            </label>
            <label className="nom">Nom : <br />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input-text"/>
            </label>
            <div className="radio">
                <input type="radio" name="presence" value={'yes'} checked={formData.presence === 'yes'} onChange={handlePresence} className="input-radio"/>
                <p>Assisteront</p>
            </div>
            {formData.presence === 'yes' &&
            <div className="presence-yes">
                <div className="check">
                    <input type="checkbox" name="houppa" checked={formData.houppa}  onChange={handleChange} className="input-radio"/>
                    <p>La cérémonie religieuse</p>
                </div>    
                <div className="check">
                    <input type="checkbox" name="chabat" checked={formData.chabat}  onChange={handleChange} className="input-radio"/>
                    <p>Le Chabat Hatan</p>
                </div>
            </div>
            }
            <div className="radio">
                <input type="radio" name="presence" value={'no'} checked={formData.presence === 'no'} onChange={handlePresence} className="input-radio"/>
                <p>N'assisteront pas</p>
            </div>
            <label className="label-textarea">Message pour les mariés
                <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            </label>
            <button type="submit">Envoyer</button>
        </form>
    </div>

  )
}

export default Response