import Header from "./components/Header" 
import Intro from "./components/intro"
import Offers from "./components/Offers"
import OrderForm from "./components/OrderForm"
  const App = () => {
  return (
    <div className="container  mx-auto">

      <Header/>
      <Intro/>
      <Offers/>
      <OrderForm/>

    
    </div>
  );
};

export default App;