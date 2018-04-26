import React from 'react';
import Slider from 'material-ui/Slider';

const SliderInput = ({ label, value, onChange }) => {
    return (
        <div>
            <label style={{ display: 'inline-block', width: '10%', fontSize: '20px', paddingRight: '10px' }}>{label}</label>

            <Slider
                min={0}
                max={100}
                step={1}
                value={value}
                onChange={onChange}
                style={{ width: '50%', display: 'inline-block' }}
                sliderStyle={{ margin: '0' }}
            />
            <label style={{ display: 'inline-block', width: '10%', fontSize: '20px', paddingLeft: '10px' }}>{value}</label>
        </div>
    )
}

export default SliderInput;