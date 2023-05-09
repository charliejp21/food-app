import './App.css';
import Inicio from './views/Inicio/Inicio';
import Recipes from './views/Recipes/Recipes';
import Create from './views/CreateRecipe/Create'
import Detail from './views/Detail/Detail'
import Nav from './components/Nav/Navbar';
import Results from './views/SearchResults/SearchResults'
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {

  const { pathname } = useLocation();

  return (
    <div className="App">

      {pathname !== "/" &&  <Nav />}

      <Routes>
        
        <Route path="/" element={<Inicio />}/>

        <Route path="/recipes" element={<Recipes />}/>

        <Route path="/create" element={<Create />}/>

        <Route path="/recipe/:id" element={<Detail />}/>

        <Route path="/results/:name" element={<Results />}/>

      </Routes>

    </div>
  );
}

export default App;
