import { useState, useEffect } from "react";

function CountDown(){

    const calculateTimeLeft = () => {
        const now = new Date();
        const weddingDate = new Date("2025-11-25T18:30:00");
        const difference = weddingDate.getTime() - now.getTime();
    
        if (difference > 0) {
          return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        } else {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      return(
            <div className="countdown">
                <div className="time"><p>{timeLeft.days}</p> <span>Days</span></div>
                <div className="time"><p>{timeLeft.hours}</p> <span>Hours</span></div>
                <div className="time"><p>{timeLeft.minutes}</p> <span>Minutes</span></div>
                <div className="time"><p>{timeLeft.seconds}</p> <span>Seconds</span></div>
            </div>
      )
      
}

export default CountDown