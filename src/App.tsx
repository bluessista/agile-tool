import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="circle-image">
          <img src="./Mieka.jpg" alt="Mieka" />
        </div>
      </header>
      <main className="App-main">
        <form action="">
          <input type="email" />
          <input type="password" />
        </form>
      </main>
    </div>
  );
}

export default App;
