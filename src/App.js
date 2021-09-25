
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import './App.css';
import AcessarGrupo from './components/acessarGrupo/AcessarGrupo'
import CriarGrupo from './components/criarGrupo/CriarGrupo';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Menu />
        <div className="quadro2">
          <div className="coluna1 coluna">
            <div className="grupos">
              <AcessarGrupo />
            </div>
          </div>
          <CriarGrupo />
        </div>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
