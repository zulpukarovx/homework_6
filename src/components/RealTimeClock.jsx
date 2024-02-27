import React, {useState, useEffect} from 'react'

const RealTimeClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
        <p>Текущее время: {currentTime.toLocaleTimeString()}</p>
        </div>
    )
}

export default RealTimeClock