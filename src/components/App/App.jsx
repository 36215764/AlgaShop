import React, { useEffect, useState } from 'react';
import CheckBox from '../../shared/CheckBox';
import LineChart from '../../shared/LineChart';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import { Container, Wrapper } from './App.styles';

const App = () => {
    const [lettuce, setLettuce] = useState(false)
    const [rice, setRice] = useState(false)
    const [percentage, setPercentage] = useState(20)

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    useEffect(() => {
        setTimeout(() => {
            setPercentage(80)
        }, 5000)
    }, [])

    return ( 
    <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer 
                left={
                    <div>
                        Produtos disponiveis
                        <CheckBox onClick={() => setLettuce(!lettuce)} title="Alface" value={lettuce}/>
                        <CheckBox onClick={() => setRice(!rice)} title="Arroz" value={rice}/>
                    </div>
                }

                middle={
                    <div>Sua lista de compras</div>
                }

                right={
                    <div>
                        Estatisticas

                        <LineChart 
                            color={colors[0]}
                            title="Saudavel"
                            percentage={percentage}
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