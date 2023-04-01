import { Io5Icon } from "react-icons/io5";
import axios from "axios";

import styled from "styled-components";
import "./App.css";
import Header from "./components/header";
import { SearchBar } from "./components/searchBar";

const AppContainer = styled.div`
  margin: auto;
  padding: 0 530px;
`;

function App() {
  return (
    <>
      <AppContainer>
        <Header></Header>
        <SearchBar></SearchBar>
      </AppContainer>
    </>
  );
}

export default App;
