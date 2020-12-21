import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { GlobalStyles } from "./global.styles";
import { AppProvider, Autocomplete, Icon } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import SearchMajor from "./assets/SearchMajor.svg";

const AppContainer = styled.div`
  display: flex;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;
  margin: auto;
  max-width: 1080px;

  @media (min-width: 769px) {
    width: 65%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  justify-content: flex-start;
`;

const CardsContainer = styled.div`
  display: flex;
  padding: 1rem 0;
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
    min-width: 480px;
    margin-right: 2rem;
  }
`;

const SearchIcon = styled.img`
  height: 24px;
  width: 24px;
  vertical-align: middle;
`;

const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  justify-content: flex-end;

  & > button:not(:first-child) {
    margin-left: 1.5rem;
  }
`;

const App = () => {
  const [nominations, setNominations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <AppProvider i18n={enTranslations}>
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
                  <Autocomplete.TextField
                    onChange={(e) => setSearchQuery(e)}
                    label="Movie title"
                    value={searchQuery}
                    prefix={<SearchIcon src={SearchMajor} />}
                    placeholder="Star Wars: Rogue One"
                  />
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
    </AppProvider>
  );
};

export default App;
