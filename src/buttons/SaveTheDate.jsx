// NE PAS OUBLIER D'INSTALLER ICS
import { createEvent } from "ics";
import CalendarIcon from "../assets/icons/CalendarIcon";

const SaveTheDate = ({ saveTheDate, text }) => {

  const handleDownload = () => {
    // Définir les détails de l'événement
    const event = {
      start: saveTheDate, // [YYYY, MM, DD, HH, MM]
      duration: { hours: 4 },
      title: "Save the Date: Elsa & Dan's Wedding",
      location: "Arugot Bossem, Hadera",
    };

    // Générer le fichier ICS
    createEvent(event, (error, value) => {
      if (error) {
        console.error(error);
        return;
      }

      // Créer un fichier Blob et ouvrir dans Safari
      const blob = new Blob([value], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      window.location.href = url; // Ouvrir dans Safari
    });
  };

  return (
      <a className="save-the-date-link" onClick={handleDownload}>{text} <CalendarIcon color={"#857667"} width={"20px"} height={"20px"}/></a>
  );
};

export default SaveTheDate;