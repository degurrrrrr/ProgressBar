import React, { useState, useEffect, useRef } from 'react';
// import { Progress } from 'react-sweet-progress';
import ProgressBar from '@ramonak/react-progress-bar';
import 'react-sweet-progress/lib/style.css';
import styled from 'styled-components';

let wholeTimeFloor;
let percent;
let totalPercent;
let percentBar;

// const progressbar = React.useRef();

// const [time, setTime] = React.useState('5');

// 쉬는 시간
export const NewProgress = ({ width, percent }) => {
  useEffect(() => {
    let wholeTime = 5;
    wholeTimeFloor = Math.floor(wholeTime * 1000); //초 단위 변환
    console.log('시간은', wholeTimeFloor);
    totalPercent = wholeTimeFloor;
    console.log(totalPercent);
    // progressbar.current.style.width = `0%`;

    let timer = () => {
      wholeTimeFloor = wholeTimeFloor - 1;
      percent = totalPercent - wholeTimeFloor;
      percentBar = (percent / totalPercent) * 100;
      console.log('랄라');
      console.log(wholeTimeFloor);
      // progressbar.current.style.width = `${percentBar}%`;
      let min = Math.floor(wholeTimeFloor / 60);
      min = min < 10 ? '0' + min : min;
      let sec = wholeTimeFloor % 60;
      sec = sec < 10 ? '0' + sec : sec;
      // setState(`${min} : ${sec}`);

      if (wholeTimeFloor <= 0) {
        clearInterval(restinterval);
        // dispatch(groupAction.groupRound(currentRound));
      }

      const restinterval = setInterval(timer, 1000);
    };
  });

  const [value, setValue] = React.useState(50);

  React.useEffect(() => {
    setValue(percent * width);
  });

  return (
    <div>
      <BarWrap style={{ width: width }}>
        <Bar style={{ width: `${value}%` }} />
      </BarWrap>
      <ProgressBar
        completed={50}
        bgColor="#9ac4cc"
        isLabelVisible={false}
        baseBgColor="#e9e9e9"
        labelColor="#e80909"
        margin="10"
        padding="10"
        transitionDuration="10"
        transitionTimingFunction="ease"
        maxCompleted={100} //playTime
      />
    </div>
  );
};

const BarWrap = styled.div`
  background-color: rgb(233, 233, 233);
  border-radius: 0.5rem;
`;

const Bar = styled.div`
  background-color: rgb(62, 122, 235);
  height: 10px;
  border-radius: 1rem;
  transition: 1s ease;
  transition-delay: 0.5s;
`;

export default NewProgress;
