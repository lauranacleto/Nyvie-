
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Splash from './splash/splash';
import Login from './login/login';
import Cadastro from './cadastro/cadastro';
import HistoricoRecorrentes from './historicoRecorrentes/historicoRecorrentes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/historicoRecorrentes" element={<HistoricoRecorrentes />} />
      </Routes>
    </BrowserRouter>
  );
}
