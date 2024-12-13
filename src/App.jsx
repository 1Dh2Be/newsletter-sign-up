import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import './App.css'

// Pages
import NewsLetter from './pages/newsletter-page/NewsLetter.jsx';

//Layout
import RoutLayout from './layouts/RoutLayout';
import Confirmation from './pages/confirmation-page/Confirmation';
import { EmailProvider } from './pages/newsletter-page/EmailContext';

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
    <EmailProvider>
      <RouterProvider router={router} />
    </EmailProvider>
  )
}

export default App;
