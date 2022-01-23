import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productlist/ProductList";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
      </div>
  );
};

export default App;