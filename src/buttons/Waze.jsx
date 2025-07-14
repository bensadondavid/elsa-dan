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
      <a className="waze-link" onClick={handleOpenWaze}>{text} <LocationIcon color={'#857667'} width={"20px"} height={"20px"}/> </a>
  );
};

export default Waze;