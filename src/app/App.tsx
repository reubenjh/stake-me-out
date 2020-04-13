import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chart from '../chart/Chart';
import './App.css';

export default function App() {
    return (
        <div className="app" data-testid='app'>
            <Router>
                <Route component={Chart} path="/" exact></Route>
            </Router>
        </div>
    );
}