import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../MyCalendar.css';

const MyCalendar = () => {
    const [date, setDate] = useState(new Date("2024-09-29"));
    const today = new Date();

    const CustomHeader = () => (
        <div className="custom-header" onClick={(e) => e.stopPropagation()}>
            <span>2024년 9월</span>
        </div>
    );

    return (
        <div>
            <div className="calendar-container">
                <Calendar
                    onChange={() => setDate(date)}
                    formatDay={(locale, date) =>
                        date.toLocaleString('en', {day: 'numeric'})
                    }
                    value={date}
                    calendarType="US"
                    // formatMonthYear={() => ''}
                    // formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, {weekday: 'short'})}
                    nextLabel={null}
                    prevLabel={null}
                    next2Label={null}
                    prev2Label={null}
                    navigationLabel={({date, label, view}) => <CustomHeader date={date}/>}
                    showNeighboringMonth={false}
                />
            </div>
            <div className="calendar-footer">
                <p><br/> 두 사람의 결혼까지 {Math.ceil((date - today) / (1000 * 3600 * 24))} 일 남았습니다.</p>
            </div>
        </div>

    );
};

export default MyCalendar;
