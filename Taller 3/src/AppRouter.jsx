import { Routes, Route } from 'react-router-dom'
import {DashboardPage} from './dashboard/pages/DashboardPage';
import { LoginPage } from './autorizacion/pages/LoginPage';

//3. importar todas las paginas que he hecho


//4.cambiar el path aqui y en el dashboard page
export function AppRouter (){
    return(
        <main>
            <Routes>
                <Route  path='/' element={<LoginPage />} />
                <Route  path='/dashboard' element={<DashboardPage />} />
            </Routes>
        </main>
    )
}


