import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import './App.css'

// Pages
import NewsLetter from './pages/newsletter-page/Newsletter';

//Layout
import RoutLayout from './layouts/RoutLayout';
import Confirmation from './pages/confirmation-page/Confirmation';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RoutLayout/>}>
        <Route index element={<NewsLetter/>} />
        <Route path='Confirmation' element={<Confirmation/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;
