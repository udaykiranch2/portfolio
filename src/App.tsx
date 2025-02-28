import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "./context/ThemeProvider";
import ParticleBackground from "./components/backgrounds/ParticleBackground";
import ModernGradient from "./components/backgrounds/ModernGradient";
import NoiseOverlay from "./components/backgrounds/NoiseOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollAnimation from './components/ScrollAnimation';
import './styles/animations.css';

// Add smooth scroll behavior to html
if (typeof window !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ModernGradient />
      <ParticleBackground />
      <NoiseOverlay />
      <ScrollAnimation threshold={0.2} rootMargin="-50px" />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
