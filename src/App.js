import Header from "./components/header.jsx"
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MovieDetails from './components/MovieDetails';
import AddItems from "./components/AddItems";
import EditDetails from "./components/EditDetails.jsx";

function App() {
  return (
    <>
    <Header />
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movieDetail/:movie_code' element={<MovieDetails/>}/>
        <Route path='/addMovie' element={<AddItems />} />
        <Route path ='/updateMovie/:id' element={<EditDetails/>}/>
      </Routes>
      
    </>
    
  );
}

export default App;
