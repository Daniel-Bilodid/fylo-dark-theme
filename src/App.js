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
      <Nav></Nav>
      <main id='main'>
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
