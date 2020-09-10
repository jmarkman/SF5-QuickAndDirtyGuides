import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CharListSidebar from './components/CharListSidebar';

const App = () => {
  return (
    <div className="container-fluid">
      <NavBar />

      <div className="row">
        <CharListSidebar />
        <div className="col-10">
          <div>
            <h1>content</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
