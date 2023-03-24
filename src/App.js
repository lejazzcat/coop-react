import './App.css';
import Navbar from './components/Navbar/Navbar';
import Search from './components/SearchMultimedia/Search';

function App() {


  return (
    <>
    <Navbar name = "Search"/>
    <div className="App">
        <Search apilink="https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D?exact=true"/>
    </div>
    </>
  );
}

export default App;
