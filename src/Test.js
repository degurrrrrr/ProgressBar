import React from 'react';
// import './progressCss';
import styled from 'styled-components';

export const ProgressBar = ({ width, percent }) => {
  let progress = percent * width;

  return (
    <ProgressDiv style={{ width: width }}>
      <Progress style={{ width: `${progress}px` }} className="progress" />
    </ProgressDiv>
  );
};

const ProgressDiv = styled.div`
  background-color: rgb(233, 233, 233);
  border-radius: 0.5rem;
`;

const Progress = styled.div`
  background-color: rgb(62, 122, 235);
  height: 10px;
  border-radius: 1rem;
`;
