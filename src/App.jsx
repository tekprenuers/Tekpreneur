import { BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './Pages/Layouts/Navbar';
import Home from './Pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
