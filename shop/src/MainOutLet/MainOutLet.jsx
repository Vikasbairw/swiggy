import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


function MainOutLet() {


    return (
        <>
            <Header />
    
                <Outlet />
           <Footer/>


        </>
    )
}
export default MainOutLet;