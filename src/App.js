import Home from 'components/Home';
// import Blog from 'components/Blog';
// import Contact from 'components/Contact';
// import Footer from 'components/Footer';
// import Milestones from 'components/Milestones';
// import Portfolio from 'components/Portfolio';
// import Pricing from 'components/Pricing';
// import ScrollToTop from 'components/ScrollToTop';
// import Services from 'components/Services';
// import Skills from 'components/Skills';
// import Testimonials from 'components/Testimonials';
// import Video from 'components/Video';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {/* <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop /> */}
    </motion.div>
  )
}

export default App