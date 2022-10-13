import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Dukes = () => (
    <div>
      <h1>Duke's Restaurants</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Dukes />);