import React from 'react';
import '../styles/gauge.css';

const GaugeComponent = ({ value }) => {
    return (
        <div className="progressbar">
            <div className="progress" style={{ width: value + '%' }}></div><div className="progressvalue">{value}%</div>
        </div>
    )
}

export default GaugeComponent;