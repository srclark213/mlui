import React from 'react';
import '../styles/gauge.css';

const colorBreakpoints = [
    {min: 0, max: 25, color: "red"},
    {min: 25, max: 50, color: "linear-gradient(to right, red, orange)"},
    {min: 50, max: 75, color: "linear-gradient(to right, red, orange, yellow)"},
    {min: 75, max: 100, color: "linear-gradient(to right, red, orange, yellow, green)"}
]

function calculateColor(value) {
    for(let breakpoint of colorBreakpoints) {
        if(value >= breakpoint.min && value < breakpoint.max) return breakpoint.color;
    }
}

const GaugeComponent = ({ value }) => {

    return (
        <div className="progressbar">
            <div className="progress" style={{ width: value + '%' }}></div>
            <span className="progressvalue">{value}%</span>
        </div>
    )
}

export default GaugeComponent;