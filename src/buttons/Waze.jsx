import LocationIcon from "../assets/icons/LocalisationIcon";


const Waze = ({ lat, long, text }) => {

  const handleOpenWaze = () => {
    // Coordonnées de la destination (latitude et longitude)
    const latitude = lat; 
    const longitude = long;

    // URL pour ouvrir Waze
    const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;

    // Redirection vers l'URL
    window.location.href = wazeUrl;
  };

  return (
      <button className="waze-link" onClick={handleOpenWaze}>{text}</button>
  );
};

export default Waze;