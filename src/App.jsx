import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './Context/appContext';
import AppRouter from './Routes/AppRouter';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <AppRouter />
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;