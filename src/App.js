import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import About from "./component/pages/about/About";
import Footer from "./component/footer/Footer";
import Shop from "./component/pages/shop/Shop";
import Shopsingle from "./component/pages/shop single/Shopsingle";
import Service from "./component/pages/service/Service";
import Servicesingle from "./component/pages/service single/Servicesingle";
import Portfolio from "./component/pages/portfolio/Portfolio";
import Portfoliosingle from "./component/pages/portfoliosingle/Portfoliosingle";
import Team from "./component/pages/team/Team";
import Blog from "./component/pages/blog/Blog";
import Blogsingle from "./component/pages/blogsingle/Blogsingle";
import Contact from "./component/pages/contact/Contact";
import Error from "./component/pages/404/Error";
import Licenses from "./component/pages/licenses/Licenses";
import Changelog from "./component/pages/changelog/Changelog";
import Protected from "./component/pages/protected/Protected";
import { useEffect, useState } from "react";
import { CratContext } from "./component/Context/CartContext";
import Shopeditem from "./component/pages/shop single/Shopeditem";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const [cart, setCart] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [Spinner, setSpinner] = useState(false);

  useEffect(() => {
    let a = localStorage.getItem("cartnumber");
    setCart(parseInt(a === null ? 0 : a));
  }, [cart]);

  setTimeout(() => {
    setSpinner(true);
  }, 1000);

  return (
    <>
      {Spinner && (
        <CratContext.Provider
          value={{
            cart: { cart, setCart },
            cartitems: { cartItem, setCartItem },
          }}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shopsingle" element={<Shopsingle />} />
              <Route path="/service" element={<Service />} />
              <Route path="/servicesingle" element={<Servicesingle />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfoliosingle" element={<Portfoliosingle />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blogsingle" element={<Blogsingle />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
              <Route path="licenses" element={<Licenses />} />
              <Route path="changelog" element={<Changelog />} />
              <Route path="protected" element={<Protected />} />
              <Route path="shopeditem" element={<Shopeditem />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CratContext.Provider>
      )}
      {!Spinner && (
        <div className="main_loader d-flex justify-content-center align-items-center">
          <p></p>
        </div>
      )}
    </>
  );
}
export default App;
