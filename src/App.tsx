import styled from 'styled-components';
import Button from './Components/Button';
import { GlobalStyles } from './global.styles';

const AppContainer = styled.div`
  display: flex;
  height: 100%;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyles/>
      <h1>
        Yo
      </h1>
      <Button onClick={() => {}} padded>
        save
      </Button>
    </AppContainer>
  );
}

export default App;
