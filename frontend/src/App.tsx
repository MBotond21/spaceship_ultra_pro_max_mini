
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { NoPage } from "./pages/NoPage.tsx";
function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="NoPage" element={<NoPage/>} />

        </Route>
      </Routes>
    </BrowserRouter>      
    </>)
}
export default App
