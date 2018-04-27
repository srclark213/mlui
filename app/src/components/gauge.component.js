import React from 'react';
import '../styles/gauge.css';

const GaugeComponent = ({ value }) => {
    return (
        <div className="progressbar">
            <div className="progress" style={{ width: value + '%' }}></div>
            <span className="progressvalue">{value}%</span>
        </div>
    )
}

export default GaugeComponent;