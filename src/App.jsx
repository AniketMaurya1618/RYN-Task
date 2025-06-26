
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';
import Hero from './components/Hero'
import Expertise from './components/Expertise';
import Work from './components/Work';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonial from './components/Testinomial';
import FAQ from './components/FAQ';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import NavDesktop from './components/NavDesktop';
import NavMobile from './components/NavMobile';




function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='font-[Syne]'>
      <NavDesktop />
      <NavMobile />
     <Hero/>
     <Expertise/>
    <Work/>
   <Experience/>
   <Blog/>
   <Testimonial />
      <FAQ/>
      <Marquee />
      <Footer />
    </div>
  )
}

export default App
