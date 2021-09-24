import React from 'react';
import { Indicator, Wrapper } from './CheckBox.styles';

const CheckBox = ({ value, title, onClick }) => {
    return <Wrapper onClick={onClick}><Indicator value={value}/>{title}</Wrapper>;
}
 
export default CheckBox;