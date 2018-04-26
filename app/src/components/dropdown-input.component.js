import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const DropdownInput = ({ label, value, onChange, options }) => {
    return (
        <div style={{ textAlign: "left" }}>
            <SelectField
                floatingLabelText={label}
                value={value}
                onChange={onChange}
                style={{width: '90%' }}
            >
                {options.map((option) => { return <MenuItem key={option.id} value={option.id} primaryText={option.value} /> })}
            </SelectField>
        </div>
    )
}

export default DropdownInput;