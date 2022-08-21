import About from "./pages/About";
import Faq from "./pages/Faq";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import RoadMap from "./pages/RoadMap";
import Showcase from "./pages/Showcase";
import Team from "./pages/Team";
// import Tab from "./pages/Tab";


function App() {
  return (
    <>
     <Home />
     <About />
     <RoadMap />
     {/* <Tab /> */}
     <Showcase />
     <Team />
     <Faq />
     <Footer />
    </>
  );
}

export default App;
