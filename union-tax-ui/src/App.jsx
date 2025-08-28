import AboutSection from "./components/AboutSection.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import NoticeBoard from "./components/NoticeBoard.jsx";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <Home />
      <AboutSection />
      <NoticeBoard />
      <Footer />
    </div>
  );
}

export default App;
