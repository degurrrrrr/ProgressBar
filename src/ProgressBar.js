import React, { useState, useEffect, useRef } from 'react';
// import { Progress } from 'react-sweet-progress';
import ProgressBar from '@ramonak/react-progress-bar';
import 'react-sweet-progress/lib/style.css';
import styled from 'styled-components';

const MyProgressBar = (props) => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    setValue(props.percent * props.width);
  });

  return (
    <BarWrap>
      <Bar />
      <ProgressBar completed={18} bgColor="#56a9f1" height="15px" isLabelVisible={false} maxCompleted={100} />
      {/* <Progress completed={60} /> */}
    </BarWrap>
  );
};

const BarWrap = styled.div`
  /* width: 600px; */
  width: 100%;
  height: 1rem;
  background-color: #ddd;
  border-radius: 30px;
`;

const Bar = styled.div`
  background-color: #fff;
  width: 500px;
  /* width: ${(props) => props.width}; */
  background: linear-gradient(90deg, #eaf692 25%, #ffd678 50%, #fe9c77 75%, #e66465 100%);
  height: 1rem;
  border-radius: 1rem;
  transition: 1s ease;
  transition-delay: 0.5s;
`;

export default MyProgressBar;
