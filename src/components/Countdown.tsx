import './styles.css';
import { useCountdown } from './useCountdown.tsx';

function Countdown() {
    const {
        eventName,
        setEventName,
        eventDate,
        setEventDate,
        eventTime,
        setEventTime,
        remainingTime,
        submittedEventName,
        handleSubmit,
    } = useCountdown();

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
