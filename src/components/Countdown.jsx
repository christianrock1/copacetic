import React, { useEffect, useState } from 'react'
import { convertMilliseconds, countdownIn24Hours } from '../utils'

export default function Countdown(props) {
    const { handleChangePage, daysWords, datetime, day } = props
    const targetMillis = datetime || Date.UTC(1944, 2, 17, 12, 0, 0) // this is the date of the allied invasion of normandy, so it's a good placeholder for now
    const [remainingMS, setRemainingMS] = useState(countdownIn24Hours(targetMillis))
    const timer = convertMilliseconds(remainingMS)

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingMS(countdownIn24Hours(targetMillis))
        }, 1000)

        return () => clearInterval(interval)
    }, [targetMillis])
    
    return (
        <div className="card countdown-card">
            <h1 className="item-header">Day {day}</h1>
            <div className="today-container">
                <div>'
                    <p>Time remaining</p>
                    <h3>{datetime ? `${Math.abs(timer.hours)} ${Math.abs(timer.minutes)} ${Math.abs(timer.seconds)}` : '23H 59M 60S' }</h3>
                </div>
            </div>
            <div>
                <p>Words for today</p>
                <h3>{daysWords.length}</h3>
            </div>

            <button onClick={() => handleChangePage(2)} className="start-task">
                <h6>Start</h6>
            </button>
        </div>
    )
}
