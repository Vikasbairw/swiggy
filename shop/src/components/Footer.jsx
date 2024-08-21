import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SiSwiggy } from "react-icons/si";
function Footer(){
    return(
        <>
        <div className="grid grid-cols-6 bg-black  list-none list_color font-[400] leading-[40px] text-[20px] pb-[100px]">
<div className=" col-start-2 pt-[50px]">
<div className="flex items-center">
    <div className="text-white text-[40px]"><SiSwiggy/></div>
    <h1 className="text-white font-bold ">Swiggy</h1>
</div>
<div className="">
    <li className="leading-[23px] ">© 2024 Bundl <br/>
        Technologies Pvt. Ltd</li>
</div>
</div>
<div className=" ">
    <h1 className="text-white font-bold pt-[50px]">Company</h1>
    <li>About</li>
    <li>Team</li>
    <li>Swiggy One</li>
    <li>Swiggy Instamart</li>
    <li>Swiggy Genie</li>
</div>
<div className="">
    <h1 className="text-white font-bold pt-[50px]">Contact us</h1>
    <li>Help & Support</li>
    <li>Partner with us</li>
    <li>Ride with us</li>
    <h1 className="text-white font-bold pt-[50px]">Legal</h1>
    <li>Terms & Conditions</li>
    <li>Cookie Policy</li>
    <li>Privacy Policy</li>
    <li>Investor Relations</li>
</div>
<div className="">
    <h1 className="text-white font-bold pt-[50px]">We deliver to:</h1>
    <li>Bangalore</li>
    <li>Gurgaon</li>
    <li>Hyderabad</li>
    <li>Delhi</li>
    <li>Mumbai</li>
    <li className=" border w-[140px] flex items-center rounded-[10px] ps-[10px]">
        <li>589 cities</li>
        <li className="ps-[10px]"><MdOutlineKeyboardArrowDown/></li>
    </li>
</div>
        </div>
        </>
    )
}
export default Footer;