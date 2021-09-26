import React from 'react';
import CheckBox from '../../shared/CheckBox';
import { useSelector } from 'react-redux';
import { selectAllProducts, selectSelectedProducts } from '../../store/Products/Products.selectors';
import { Items, Title, Wrapper } from './ShoppingList.styles';

const ShoppingList = ({ title, onToggle, displayOnlySelected }) => {
    const products = useSelector(displayOnlySelected ? selectSelectedProducts : selectAllProducts)

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