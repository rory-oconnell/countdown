import { useState } from 'react';

export function useCountdown() {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [remainingTime, setRemainingTime] = useState(0);
    const [submittedEventName, setSubmittedEventName] = useState('');

    function startCountdown(targetDateTime: number | Date) {
        const interval = setInterval(() => {
            const now = new Date().getTime(); // Now is a number (timestamp)
            const target =
                targetDateTime instanceof Date
                    ? targetDateTime.getTime()
                    : targetDateTime;
            const difference = target - now;

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

    return {
        eventName,
        setEventName,
        eventDate,
        setEventDate,
        eventTime,
        setEventTime,
        remainingTime,
        submittedEventName,
        handleSubmit,
    };
}
