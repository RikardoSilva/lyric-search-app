import React from 'react'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Provider } from './context'

import './App.css'

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Index />} />
              <Route exact path='/lyrics/track/:id' element={<Lyrics />} />
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
