import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LineChart from '../../shared/LineChart';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import ShoppingList from '../ShoppingList';
import Calculator from '../Calculator';
import { Container, Wrapper } from './App.styles';
import { selectAllProducts, selectedProductsTotalPrice, selectSelectedProducts } from '../../store/Products/Products.selectors';
import extractPercentage from '../../utils/extractPercentage';
import { toggleProduct } from '../../store/Products/Products.actions';

const App = () => {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)
    const selectedProducts = useSelector(selectSelectedProducts)
    const totalPrice = useSelector(selectedProductsTotalPrice)

    const handleToggle = (id) => {
        dispatch(toggleProduct(id))
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
                            percentage={extractPercentage(
                                selectedProducts.length, 
                                selectedProducts.filter(product => product.tags.includes('healthy')).length)
                            }
                        />
                        <LineChart 
                            color={colors[1]}
                            title="Não tão saudavel assim"
                            percentage={extractPercentage(
                                selectedProducts.length, 
                                selectedProducts.filter(product => product.tags.includes('junk')).length)
                            }
                        />
                        <LineChart 
                            color={colors[2]}
                            title="Limpeza"
                            percentage={extractPercentage(
                                selectedProducts.length, 
                                selectedProducts.filter(product => product.tags.includes('cleaning')).length)
                            }
                        />
                        <LineChart 
                            color={colors[3]}
                            title="Outros"
                            percentage={extractPercentage(
                                selectedProducts.length, 
                                selectedProducts.filter(product => product.tags.includes('others')).length)
                            }
                        />

                        <div style={{ marginTop: 12 }}>
                            <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
                                previsão de gastos:
                            </h2>
                            <div style={{ fontSize: 24 }}>
                                { totalPrice.toLocaleString('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency',
                                    minimumFractionDigits: 2
                                }) }
                            </div>

                            <Calculator />
                        </div>
                    </div>
                }
            />
        </Container>
    </Wrapper> 
    );
}
 
export default App;