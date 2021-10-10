import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Calendar } from 'antd';
import styled from 'styled-components';
import './index.css';

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 8px;
  text-align: left;
  background-color: white;
  transition-duration: 0.2s;
  font-weight: 300;
  font-size: 14px;
  margin: 0;
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: grid;
`;

const DoneButton = styled.button`
  border: none;
  background-color: #2D4863;
  width: 70%;
  height: 40px;
  border-radius: 12px;
  color: white;
  text-align: center;
  transition-duration: 0.2s;
  font-weight: 300;
  font-size: 14px;
  margin: 0;
`;

function sayDone() {
  alert('Doneeee!');
}

const types = ['✔️🟢 Yeah! I am available', '➖🟡 Nah, not really', '❌🔴 Really busy'];

export default function App() {
  const [active, setActive] = useState(types[0])
  return (
    <>
      <div class="leftbg">
        <div class="onleftbg">
          <div class='left'>
            <h3>Please select<br></br>your day.</h3>
            <br></br>
            
            <ButtonGroup>
              {types.map(type => (
                <ButtonToggle
                  key={type}
                  active={active === type}
                  onClick={() => setActive(type)}
                >
                  {type}
                </ButtonToggle>
              ))}
            </ButtonGroup>
            <br></br>
            
            <DoneButton onClick={sayDone}>Done</DoneButton>

          </div>
        </div>
      </div>
    
      <div class="rightbg">
        <div class="centered">
          <div class="left">
            <h3><img src="http://hillrag.com/wp-content/uploads/2017/11/rabbit-pic.jpg" alt="Avatar man"></img>  username's calendar</h3>
          </div>
          <div style={{display: 'block', padding: 20}}>
            <Calendar onChange={(value) => {
              let i = 0;
              for (;i<3;i++) {
                if (active === types[i]) {
                  alert(`You selected ${value.format('YYYY-MM-DD')} ${types[i]}`)
                }
              }
            }} />
          </div>
          <br></br>
        </div>
      </div>  
    </>
  );
}