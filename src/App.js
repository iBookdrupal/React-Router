import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'

//pages 
import Home from './pages/Home'
import About from './pages/About'

//layout
import RootLayout from './layout/RootLayout'
import HelpLayout from './layout/HelpLayout'
import Contact from './pages/help/contact'
import Faq from './pages/help/faq'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>

          <Route path='help' element={<HelpLayout/>}>
            <Route path='faq' element={<Faq />} />
            <Route path='contact' element={<Contact />} />

          </Route>
    </Route>
    )
  )

function App() {
  return (   
      <RouterProvider router={router} />
  );
}

export default App
