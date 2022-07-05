import Header from "./components/header.jsx"
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <>
    <Header />
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movieDetail/:movie_code' element={<MovieDetails/>}/>
      </Routes>
      
    </>
    
  );
}

export default App;
