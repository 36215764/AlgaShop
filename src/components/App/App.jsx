import React, { useEffect, useState } from 'react';
import LineChart from '../../shared/LineChart';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import ShoppingList from '../ShoppingList/ShoppingList';
import { Container, Wrapper } from './App.styles';
import productsMock from '../../mocks/productsList.json'

const App = () => {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']
    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])

    useEffect(() => {
        const newSelectedProducts = products
            .filter((product) => product.checked)

        setSelectedProducts(newSelectedProducts)
    }, [products])

    const handleToggle = (id) => {
        const newProducts = products.map((product) => 
            product.id === id 
            ? { ...product, checked: !product.checked}
            : product
        );

        setProducts(newProducts);
    }

    return ( 
    <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={
                    <ShoppingList 
                        title="Produtos disponiveis"
                        products={products}
                        onToggle={handleToggle}
                    />
                }

                middle={
                    <ShoppingList 
                        title="Sua lista de compras" 
                        products={selectedProducts}
                        onToggle={handleToggle}
                    />
                }

                right={
                    <div>
                        Estatisticas

                        <LineChart 
                            color={colors[0]}
                            title="Saudavel"
                            percentage={80}
                        />
                        <LineChart 
                            color={colors[1]}
                            title="Não tão saudavel assim"
                            percentage={20}
                        />
                        <LineChart 
                            color={colors[2]}
                            title="Limpeza"
                            percentage={35}
                        />
                        <LineChart 
                            color={colors[3]}
                            title="Outros"
                            percentage={15}
                        />
                    </div>
                }
            />
        </Container>
    </Wrapper> 
    );
}
 
export default App;