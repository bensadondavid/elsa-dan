
function Eta() {

    const clickEta = ()=>{
       window.open("https://israel-entry.piba.gov.il/apply-for-an-eta-il-1/", "_blank");
    }
    
  return (

    <div className="eta">
      <img src="Images/fleur-2.webp" />
        <p className="eta-title">Info pratique</p>
        <p className="eta-text">
            Depuis le 1er aout 2024 il est obligatoire pour les touristes souhaitant
            se rendre en israel de remplir le formulaire suivant :
        </p>
        <button className="eta-button" onClick={clickEta}>Formulaire ETA</button>
    </div>

  )

}

export default Eta