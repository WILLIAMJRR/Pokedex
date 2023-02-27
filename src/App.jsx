import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ProtecteRoutes from './pages/ProtecteRoutes';
import Pokedex from './pages/Pokedex';
import Pokeinformation from './pages/Pokeinformation';
import Header from './shared/Header';

function App() {
    // es el vehiculo q va a la store y trae el estado global
    //paso4 el state es el reducer q esta en la store es un objeto q va a tener todos los estados reducer en este caso solo es el q esta en el index como nametrainer
    //  const { nameTrainer } = useSelector((state) => state);

    //  console.log(nameTrainer);

    return (
        <div className='app'>
            {/* paso 6.1 sirve para indicar que este componente van todas las rutas */}
                  
            <Routes>
                <Route path='/' element={<Home />} />

                {/*paso 8.1 ruta protegida */}
                <Route element={<ProtecteRoutes />}>
                    {/*8.2 rutas anidades que renderiza las rutas hijas = outlet // el path es donde va a ir la ruta de la pagina */}
                    <Route path='/pokedex' element={<Pokedex />} />
                    <Route path='/pokedex/:id' element={<Pokeinformation />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
