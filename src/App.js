import './App.css';
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import requests from "./requests";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="app">

      <Nav/>

      <Banner/>

      <Row title="Netflix Orignals" fetchURL={requests.fetchNetflixOrignals} isLargeRow />
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    
    </div>
  );
}

export default App;
