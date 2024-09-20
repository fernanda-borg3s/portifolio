import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sobre from './pages/Sobre/Sobre.jsx';
import Projetos from './pages/Projetos/Projetos.jsx';
import Home from './pages/Home/Home.jsx';
import NavbarHome from './components/Navbar/Navbar.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarHome/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/projetos",
        element: <Projetos/>,
      },
      {
        path: "/sobre",
        element: <Sobre/>,
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
