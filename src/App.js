import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import requests from './Components/Requests';
import Row from './Components/Row';

function App() {
  return (
   <div className='App'>
    <Nav/>
    <Banner/>

      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.  fetchNetflixOriginals} 
       isLargeRow/>
      <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries Movies"fetchUrl={requests. fetchDocumentaries}/>

   </div>
  );
}

export default App;

// import "./App.css";
// import requests from "./Components/Requests";
// import Row from "./Components/Row";

// function App() {
//   return (
//     <div className="App">
//       {/* Netflix Originals */}
//       <Row
//         title="NETFLIX ORIGINALS"
//         fetchUrl={requests.fetchNetflixOriginals}
//       />

//       {/* Trending Now */}
//       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

//       {/* Top Rated */}
//       <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />

//       {/* Action Movies */}
//       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

//       {/* Comedy Movies */}
//       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

//       {/* Horror Movies */}
//       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

//       {/* Romance Movies */}
//       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

//       {/* Documentaries */}
//       <Row
//         title="Documentaries Movies"
//         fetchUrl={requests.fetchDocumentaries}
//       />
//     </div>
//   );
// }

// export default App;
