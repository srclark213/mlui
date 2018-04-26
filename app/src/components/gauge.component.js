import React from 'react';
import Gauge from 'react-svg-gauge';

const GaugeComponent = ({ value }) => {
    return (
        <div>
            <Gauge value={value} width={400} height={320} label="Result" color={"#32CD32"} />
        </div>
    )
}

export default GaugeComponent;