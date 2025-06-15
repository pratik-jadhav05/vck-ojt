import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AobutPage from "./pages/AboutPage";
import './App.css';
const App =() => {
    return(
        <>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/about" element={<AobutPage/>}/>
              </Routes>
            </Router>
        </>
    )
}

export default App;
