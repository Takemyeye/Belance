import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ActiveProvider } from './components/ActiveContext';
import { Register } from './private/register';
import { Profile } from './components/Settings/profile';
import TeamPage from './components/developres/teamPage';
import NotFound from './components/404';
import Landing from './components/LandingPage';
import Home from './components/Home';
import About from './components/component/pages/About';
import Works from './components/component/pages/Works';
import Maket from './components/component/maketComponent/maket';
import './App.scss';

function App() {
  return (
    <Router>
      <ActiveProvider>
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/profile' element={<Profile/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/works' element={<Works/>} />
          <Route exact path='/maket' element={<Maket/>} />
          <Route exact path='/team' element={<TeamPage/>} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/' element={<Landing />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </ActiveProvider>
    </Router>
  );
}

export default App;
