import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/shared/Header/Header';
import Customers from './Pages/Customers/Customers';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route index element={<Home />} />
             <Route path="customers" element={<Customers />}/>
            {/*<Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
            </Route> */}
          {/* </Route> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
