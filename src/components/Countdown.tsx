import './styles.css';
import { useEffect, useState } from 'react';

function Countdown() {
    const [eventName, setEventName] = useState('');
    const [counter, setCounter] = useState(500);
    const [submittedEventName, setSubmittedEventName] = useState('');
    const [submittedCounter, setSubmittedCounter] = useState(0);

    function handleSubmit() {
        setSubmittedEventName(eventName);
        setSubmittedCounter(counter);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="event-info-input">
                <label>
                    Event Name
                    <input
                        type="text"
                        placeholder="Enter event name here"
                        name="eventName"
                        required={true}
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    />{' '}
                </label>
                <label>
                    Event Time
                    <input type="number" required={true} />
                </label>
            </div>
            <div>
                <button className="start-button" onClick={handleSubmit}>
                    Start Countdown
                </button>
            </div>
            <div className="rectangle">
                <p className="countdown-title">
                    Countdown to {submittedEventName}:
                </p>
                <p className="countdown-title"> {submittedCounter}</p>
            </div>
        </>
    );
}

export default Countdown;
