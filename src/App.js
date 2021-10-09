import React from 'react';
import "antd/dist/antd.css";
import { Calendar } from 'antd';

export default function App() {
  return (
    <div style={{
      display: 'block', width: 950, height: 330, padding: 20
    }}>
      <Calendar onChange={(value) => {
        alert(`You selected ${value.format('YYYY-MM-DD')}`)
      }} />
    </div>
  );
}