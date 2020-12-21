import { useState } from "react";
import styled from "styled-components";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { GlobalStyles } from "./global.styles";

const AppContainer = styled.div`
  display: flex;
  height: 100%;
  max-width: 1440px;
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;
  margin: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  justify-content: flex-start;
`;

const CardsContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) {
    min-width: 440px;
    margin-right: 2rem;
  }
`;

const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  justify-content: flex-end;

  & > button:not(:first-child) {
    margin-left: 0.5rem !important;
  }
`;

const App = () => {
  const [nominations, setNominations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <AppContainer>
      <GlobalStyles />
      <ContentContainer>
        <HeaderContainer>
          <h1>Hi there!</h1>
          <p>
            It’s that time of the year to choose your{" "}
            <span className="green">Shoppies</span> nominations 🍿
          </p>
        </HeaderContainer>
        <SelectionContainer>
          <label>
            Select your <b>top 5</b> movies of the year using the search bar
            below
          </label>
          <CardsContainer>
            <SearchContainer>
              <Card>
                <label>
                  <b>Movie title</b>
                </label>
              </Card>
              <Card>
                <label>
                  <b>Search results will appear here</b>
                </label>
              </Card>
            </SearchContainer>
            <Card>
              <label>
                <b>Your nominations are empty</b>
              </label>
            </Card>
          </CardsContainer>
        </SelectionContainer>
        <ActionsContainer>
          <Button aria-label="Clear nominations" secondary onClick={() => {}}>
            clear
          </Button>
          <Button aria-label="Save nominations" onClick={() => {}}>
            save
          </Button>
        </ActionsContainer>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
