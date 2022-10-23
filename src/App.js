import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="app">
     <Nav />
     <Banner />
     <Row title="Filmes Recomendados" fetchUrl={requests.fetchTrending} 
     isLargeRow 
     />
     <Row 
     title="Filmes Originais Netflix"
     fetchUrl={requests.fetchNetflixOriginals}/>
     <Row 
     title="Filmes Originais PrimeVideo"
     fetchUrl={requests.fetchPrimevideoOriginals}/>
     <Row 
     title="Filmes Originais Disney+"
     fetchUrl={requests.fetchDisneyOriginals}/>
     <Row 
     title="Filmes Originais HBOMAX"
     fetchUrl={requests.fetchHBOMAXOriginals}/>
     <Row title="Filmes em Alta" fetchUrl={requests.fetchTopRated} />
     <Row title="Filmes de Ação" fetchUrl={requests.fetchActionMovies} />
     <Row title="Filmes de Comédia" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Filmes de Terror" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Filmes de Romance" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentários" fetchUrl={requests.fetchDocumantaries} />

     <footer>
      Feito para Fins Acadêmicos <br/>
      Direitos de imagem para Netflix, PrimeVideo, Disney e HBO <br/>
      Dados utilizados do site Themoviedb.org

     </footer>
    </div>
  );
}

export default App;
