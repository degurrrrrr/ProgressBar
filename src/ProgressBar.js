import React from 'react';
import styled from 'styled-components';

const ProgressBar = (props) => {
  return (
    <BarWrap>
      <Progress width={}/>
    </BarWrap>
  );
};

const BarWrap = styled.div`
  width: 600px;
  height: 1rem;
  background-color: #ddd;
  border-radius: 40px;
`;

const Progress = styled.div`
  background-color: fff;
  width: ${(props) => props.width};
`;

export default ProgressBar;
