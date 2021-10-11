import React, { useState } from 'react';
import "antd/dist/antd.css";
import { Calendar } from 'antd';
import styled from 'styled-components';
import './index.css';

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 1rem;
  text-align: left;
  background-color: white;
  transition-duration: 0.2s;
  font-size: 0.9rem;
  padding: 0.4rem 0rem 0.4rem 0rem;
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
  height: 2.5rem;
  border-radius: 1rem;
  color: white;
  text-align: center;
  transition-duration: 0.2s;
  font-size: 0.9rem;
`;

const One = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: #81B725;
  position: absolute;
  right: 0;
  top:0 ;
  filter: blur(9rem);
  opacity: 60%;
  z-index: -1;
`;

const Two = styled.div`
  width: 40rem;
  height: 40rem;
  background-color: #81B725;
  position: absolute;
  left: 0;
  bottom:0 ;
  filter: blur(9rem);
  opacity: 60%;
  z-index: -1;
`;

const Three = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: #E2410A;
  position: absolute;
  right: 0;
  bottom:0 ;
  filter: blur(8rem);
  opacity: 70%;
  z-index: -1;
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
        <One></One>
        <Two></Two>
        <Three></Three>
        <div class="centered">
          <div class="left">
            <h3><img src="http://hillrag.com/wp-content/uploads/2017/11/rabbit-pic.jpg" alt="Avatar man"></img>  username's calendar</h3>
          </div>
          <div class="calendarpadding">
          <div class="calendar">
            <Calendar onChange={(value) => {
              let i = 0;
              for (;i<3;i++) {
                if (active === types[i]) {
                  alert(`You selected ${value.format('YYYY-MM-DD')} ${types[i]}`)
                }
              }
            }} />
          </div></div>
          <br></br>
        </div>
      </div>  
    </>
  );
}