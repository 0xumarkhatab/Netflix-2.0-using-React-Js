import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import "./App.css";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        isLarge
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action" fetchURL={requests.fetchComedyMovies} />
      <Row title="Comedy" fetchURL={requests.fetchActionMovies} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
