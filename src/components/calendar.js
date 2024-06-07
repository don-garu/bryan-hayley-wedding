import React from 'react';
import '../Calendar.css';

const Calendar = ({ year, month, highlightDay, title }) => {
    const generateCalendar = (year, month) => {
        const weeks = [];
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        let day = 1;
        for (let i = 0; i < 5; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    week.push(null);
                } else if (day > daysInMonth) {
                    week.push(null);
                } else {
                    week.push(day);
                    day++;
                }
            }
            weeks.push(week);
        }
        return weeks;
    };

    const weeks = generateCalendar(year, month);

    return (
        <div className="calendar-container">
            <div className="calendar">
                <div className="calendar-title">{title}</div>
                <div className="calendar-header">
                    <div>일</div>
                    <div>월</div>
                    <div>화</div>
                    <div>수</div>
                    <div>목</div>
                    <div>금</div>
                    <div>토</div>
                </div>
                {weeks.map((week, i) => (
                    <div className="calendar-week" key={i}>
                        {week.map((day, j) => (
                            <div
                                key={j}
                                className={`calendar-day 
                  ${day === highlightDay ? 'highlight' : ''}
                  ${j === 0 || j === 6 ? 'weekend' : ''}
                `}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
