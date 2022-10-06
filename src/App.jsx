import { Footer, Header } from './components'
import './styles/_main.style.scss'
import {RouterProvider} from "react-router-dom";
import {router} from './routers/Pages.router'

function App() {
 
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App