
import HeaderTop from "./HeaderTop";
import "./style.scss";
import Navbar from './Navbar';
const index = () => {
    return (
        <header className=" border-y" >
            <HeaderTop/>

            <Navbar/>
         
        </header>
    );
};

export default index;