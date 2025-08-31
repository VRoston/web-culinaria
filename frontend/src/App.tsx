import Header from './components/Header';
import CreateRecipe from './pages/CreateRecipe';
import { Inicio } from './pages/LandPage';
import MyRecipes from './pages/MyRecipes';
import ProfileSettings from './pages/ProfileSettings';
import Recipe from './pages/Recipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<ProfileSettings />} />
        <Route path="/minhas-receitas" element={<MyRecipes />} />
        <Route path="/receitas" element={<MyRecipes />} />
        <Route path="/criar-receita" element={<CreateRecipe />} />
        <Route path="/receita/:id" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;