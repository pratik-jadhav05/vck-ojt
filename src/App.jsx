import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contactpage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import "./styles/Pages.css";
import "./App.css";
import AdmissionPages from "./pages/AdmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import DeveloperPopup from "./components/Developer/DeveloperPopup";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
      <>
      <div>
        {/* Your main application content */}
        <DeveloperPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Pratik Suresh Jadhav"
          studentPhotoUrl="Images/20250630_112245.png" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <Router>
        <div className="main-layout">
          <Header/>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/home" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/course" element={<CoursesPage/>}/>
              <Route path="/contact" element={<Contactpage/>}/>
              <Route path="/admissions" element={<AdmissionPages/>}/>
            </Routes>
          </div>
          <Footer/>
          <ChatbotComponent/>
      </div>
      </Router>
      </>
  )
}

export default App;