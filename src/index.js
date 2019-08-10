import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import './css/style.css';

render(<Router basename={process.env.PUBLIC_URL}/>, document.querySelector('#root'));
