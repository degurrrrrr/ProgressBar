import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(39);

  // useState에 받아온 동영상의 길이를 각각 넣어주면 됨

  useEffect(() => {
    const hour = parseInt(hours);
    const min = parseInt(minutes);
    const sec = parseInt(seconds);

    const countdown = setInterval(() => {
      if (sec > 0) {
        setSeconds(sec - 1);
      }
      if (sec === 0) {
        if (min === 0) {
          if (hour === 0) {
            clearInterval(countdown);
            window.alert('운동 시간이 끝났습니다');
          } else {
            setHours(hour - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          if (hours === 0) {
            setMinutes(min - 1);
            setSeconds(59);
          } else {
            setMinutes(min - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [hours, minutes, seconds]);

  return (
    <div className="App">
      <h1>CountDown!</h1>
      <div>
        <h2>
          {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      </div>
    </div>
  );
}
