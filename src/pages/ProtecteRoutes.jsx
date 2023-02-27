import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtecteRoutes = () => {
    
    // paso 8 es el vehiculo q va a la store y trae el estado global
    //paso 4 lo hicieron primero y luego paso al protecter routes el state es el reducer q esta en la store es un objeto q va a tener todos los estados reducer en este caso solo es el q esta en el index como nametrainer 
    //useselector trae nameTRainer

    
    const { nameTrainer } = useSelector((state) => state);
    
    //8.3 si nametrainer tiene mas de 3 caracteres entra al oulet si no hace nada
    if (nameTrainer.length > 1) {
        //oulet es un componente que renderiza componentes hijos o rutas hijas
        return <Outlet />;
    } else {
       // navigate esto sirve para navegar a una ruta publica q en este caso es home
        return <Navigate to='/' />;
    }
};

export default ProtecteRoutes;
