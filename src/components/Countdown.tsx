import './styles.css';
import { useState } from 'react';

function Countdown() {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [remainingTime, setRemainingTime] = useState(0);
    const [submittedEventName, setSubmittedEventName] = useState('');

    function startCountdown(targetDateTime: number | Date) {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDateTime - now;

            if (difference <= 0) {
                clearInterval(interval);
                setRemainingTime(0); // Event is here!
            } else {
                setRemainingTime(Math.floor(difference / 1000)); // Save seconds left
            }
        }, 1000);
    }

    function handleSubmit() {
        if (!eventName) {
            alert('Event name must be entered!');
            return;
        }

        handleEventNameSubmission(eventName);
        handleEventTimeSubmission();

        const timeToUse = eventTime || '00:00'; // Default if empty
        const targetDateTime = new Date(`${eventDate}T${timeToUse}`);

        startCountdown(targetDateTime);
    }

    function handleEventNameSubmission(eventName: string) {
        setSubmittedEventName(eventName);
    }

    function handleEventTimeSubmission() {
        if (!eventTime) {
            setEventTime('00:00'); // Default to midnight if empty
        }
    }

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
                    Event Date
                    <input
                        type="date"
                        required={true}
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                </label>
                <label>
                    Event Time
                    <input
                        type="time"
                        required={false}
                        value={eventTime}
                        onChange={(e) => setEventTime(e.target.value)}
                    />
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
                <p className="countdown-title">{remainingTime} seconds left</p>
            </div>
        </>
    );
}

export default Countdown;
