import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "London",
  country: "UK"
}
ReactDOM.render(
  <h1 id="heading" className="cool-text"> {city.name} is in the {city.country}</h1>
  , document.getElementById('root')
);


