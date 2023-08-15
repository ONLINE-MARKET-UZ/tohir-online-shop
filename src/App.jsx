import Header from "./components/Header" 
import Intro from "./components/intro"
import Offers from "./components/Offers"
import OrderForm from "./components/OrderForm"
import Layout from "./components/Layout"
import  Footer  from "./components/Footer"
  const App = () => {
  return (
    <div className="container  mx-auto">

      <Header/>
      <Intro/>
      <Offers/>
      <OrderForm/>
      <Layout/>
      <Footer/>

    
    </div>
  );
};

export default App;