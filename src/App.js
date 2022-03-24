import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Header from './components/header/Header';
import GlobalStyle from './globalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/search">Search</Route>
          <Route path="/">Home</Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
