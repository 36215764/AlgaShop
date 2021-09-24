import React from 'react';
import { Wrapper } from './AppContainer.styles';

const AppContainer = ({ left, middle, right }) => {
    return <Wrapper>
        <div>{left}</div>
        <div>{middle}</div>
        <div>{right}</div>
    </Wrapper>;
}
 
export default AppContainer;