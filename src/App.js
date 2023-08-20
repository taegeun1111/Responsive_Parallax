import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./pages/header/Header";
import Main from "./pages/main/Main";
import Footer from "./pages/footer/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
      <TESET>fawrl;kfarw</TESET>
    </>
  );
}

export default App;

const TESET = styled.nav`
  font-family: 'Oswald',sans-serif;
`
