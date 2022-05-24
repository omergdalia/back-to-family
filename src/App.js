import hometown from './images/hometown.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 dir='rtl'>
          ברוכים הבאים לאתר המדהים של איתי שרון!
        </h2>
        <br />
        <img src={hometown} width="40%" alt="home town"/>
        <br />
        <a
          className="App-link"
          href="https://nissimamon.com/greece/"
          target="_blank"
          rel="nissimamon noreferrer"
        >
          פסטיבל יוגה וחכמת הלב
        </a>
        <br />
          בהנחיית: ניסים אמון
      </header>
    </div>
  );
}

export default App;
