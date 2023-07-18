import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.scss'
import { Home, PokeDetail } from './pages'
import PokemonProvider from './context/PokemonContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: ':pokeId',
    element: <PokeDetail />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(

  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>


)
