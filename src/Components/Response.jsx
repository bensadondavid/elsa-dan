import { useState } from "react"


function Response() {

    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        presence : '',
        houppa : '',
        chabat : '',
        message : ''
    })

    const handleChange = (e)=>{
        const {name, type, value, checked} = e.target
        setFormData(prev => ({
            ...prev, [name] : type === 'checkbox' ? checked : value
        }))
    }

    const handlePresence = (e)=>{
        setFormData(prev =>({
            ...prev, presence : e.target.value 
        }))
    }

  return (
    
    <div className="response">
        <p className="response-title">La Réponse</p>
        <img src="Images/logo-elsa-dan-home-houppa.webp" alt="" className="chabat-logo" />
        <form>
            <label>Prénom<br />
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>
            <label>Nom<br />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>
            <label>
                <input type="radio" name="presence" value={'yes'} checked={formData.presence === 'yes'} onChange={handlePresence} />
                Assisteront
            </label>
            {formData.presence === 'yes' &&
            <>
                <label>
                    <input type="checkbox" name="houppa" checked={formData.houppa}  onChange={handleChange}/>
                </label>
            </>
            }
            <label>
                <input type="radio" name="presence" value={'no'} checked={formData.presence === 'no'} onChange={handlePresence} />
                N'assisteront pas
            </label>
        </form>
    </div>

  )
}

export default Response