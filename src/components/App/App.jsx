import React, { useState } from 'react';
import CheckBox from '../../shared/CheckBox';
import AppContainer from '../AppContainer';
import AppHeader from '../AppHeader';
import { Container, Wrapper } from './App.styles';

const App = () => {
    const [lettuce, setLettuce] = useState(false)
    const [rice, setRice] = useState(false)

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
                    <div>Estatisticas</div>
                }
            />
        </Container>
    </Wrapper> 
    );
}
 
export default App;