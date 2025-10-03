import { useCountdown } from './useCountdown.tsx';

function Countdown() {
    const likes = 10;
    const site = "http://www.google.com"
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
                    <br />
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
                    <br />
                    <br />
                    Event Date
                    <br />
                    <input
                        type="date"
                        required={true}
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                </label>
                <label>
                    <br />
                    <br />
                    Event Time
                    <br />
                    <input
                        type="time"
                        required={false}
                        value={eventTime}
                        onChange={(e) => setEventTime(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <br />
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
            <p>{ likes }</p>
            <p> {"Wassup my ninjas"}</p>
            <p> {Math.random() * 10}</p>
            <a href={site}>Google Site</a>
        </>
    );
}

export default Countdown;
