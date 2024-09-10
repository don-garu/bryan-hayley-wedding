import { useEffect, useState } from "react";

const thisIsNotTheDay = (timeLeft) => {
    return <div className='calendar-countdown-text'>
        준익 <span className='calendar-countdown-text-inner'>♥</span> 현진의 결혼까지<br/>
        {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초 남았어요
    </div>
}

const thisIsTheDay = () => {
    return <div className='calendar-countdown-text'>
        준익 <span className='calendar-countdown-text-inner'>♥</span> 현진의 결혼이 <b>바로 오늘</b>입니다!
    </div>
}

const Countdown = () => {
    const targetDate = new Date("2024-09-29 11:00")
    let isTheDay = false;

    const calculateTimeLeft = () => {
        const now = new Date()
        if (now.getMonth() === targetDate.getMonth() && now.getDate() === targetDate.getDate()) {
            isTheDay = true
        }

        const difference = targetDate - now

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='calendar-countdown-container'>
            {isTheDay ? thisIsTheDay() : thisIsNotTheDay(timeLeft)}
        </div>
    );
};

export default Countdown;
