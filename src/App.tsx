import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SignIn from './pages/SignIn';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import GlobalStyle from './styles/global';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppProvider from './hooks';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Routes from './routes/index';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
