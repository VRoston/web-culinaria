import Header from './components/Header';
import { Inicio } from './pages/LandPage';
import ProfileSettings from './pages/ProfileSettings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<ProfileSettings/>} />
      </Routes>
    </Router>
  );
}

export default App;
