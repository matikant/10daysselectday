import React from 'react';
import "antd/dist/antd.css";
import { Calendar } from 'antd';
import $ from 'jquery';
import 'bootstrap';
global.jQuery = $;
require('bootstrap');

//global.jQuery = require('jquery');
//window.$ = window.jQuery = jQuery;

export default function App() {
  return (
    <div style={{
      display: 'block', width: 1000, height: 300, padding: 30
    }}>
      <Calendar onChange={(value) => {
        alert(`You selected ${value.format('YYYY-MM-DD')}`)
      }} />
    </div>
  );
}