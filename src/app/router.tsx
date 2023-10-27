import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Root from './Root';
import HomePage from '../pages/HomePage';
import DashboardPage from '../pages/DashboardPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route path='/' element={<HomePage />} />
            <Route path='dashboard' element={<DashboardPage />} />
            <Route path='*' element={<>Error 404 page</>} />
        </Route>
    )
);
