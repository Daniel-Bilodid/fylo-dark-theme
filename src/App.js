import Nav from './components/nav/Nav';
import About from './components/about/About';
import Info from './components/info/Info';
import Productive from './components/productive/Productive';
import Testimonials from './components/testimonials/Testimonials';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
     <main id='main'>
      <Nav></Nav>
     
      <About></About>
      
      <Info></Info>
      <div className='curve bg-dark-blue-main'>
      <Productive></Productive>
      <Testimonials></Testimonials>
      </div>
      <Form></Form>
        <Footer></Footer>
     
      </main>
      
    </>
  );
}

export default App;
