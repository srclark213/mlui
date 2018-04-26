import React from 'react';
import Slider from 'material-ui/Slider';

const SliderInput = ({ label, value, minVal, maxVal, onChange }) => {
    return (
        <div style={{textAlign: "left"}}>
            <label style={{ fontSize: '16px' }}>{label}</label>

            <div style={{display: "flex"}}>
                <Slider
                    min={minVal}
                    max={maxVal}
                    step={1}
                    value={value}
                    onChange={onChange}
                    style={{ flex: '80%' }}
                    sliderStyle={{ margin: '15px' }}
                />
                <label style={{ flex: '15%', textAlign: "center", fontSize: '16px' }}>{value}</label>
            </div>
        </div>
    )
}

export default SliderInput;