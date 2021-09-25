import React from 'react';
import CheckBox from '../../shared/CheckBox';
import { Items, Title, Wrapper } from './ShoppingList.styles';

const ShoppingList = ({ title, products, onToggle }) => {
    return <Wrapper>
        <Title>{title}:</Title>
        <Items>
            {
                products.map(product => 
                    <CheckBox
                        key={product.id}
                        value={product.checked} 
                        title={product.name}
                        onClick={() => onToggle(product.id)}
                    />
                )
            }
        </Items>
    </Wrapper>;
}
 
export default ShoppingList;