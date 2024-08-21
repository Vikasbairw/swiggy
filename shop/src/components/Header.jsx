import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import axios from "axios";
import { useContext } from "react";
import { context } from "../Context/MainContext";

function Header() {
    const [toggle, setToggle] = useState(false);
    const [search, setSearch] = useState(0);
    
const {SetSearchValue} = useContext(context);


    document.querySelector("#searchinput")?.addEventListener(
        "keyup", (event) => {
            if (event.key === "Enter") {
                const searchValue = event.target.value;
                const upperletter = searchValue?.charAt(0)?.toUpperCase() + searchValue.slice(1);


                
                axios.get('http://localhost:5000/admin/' + upperletter).then(
                    (suc) => {
                        if(suc.data.status === 1){
                            console.log(suc.data.data.category)
                            SetSearchValue(suc.data.data.category);
                        }
                    }
                ).catch(
                    (err) => {
                        console.log(err)
                    }
                )

            }
        }
    );



    useEffect(
        () => {
            // searching();
        }, []
    )

    const links = [
        {
            icon: <BiSolidOffer />,
            name: "Offers",
            sup: "New",
            link:null
        },
        {
            icon: '',
            name: "Login",
            link:"/login"
        },
        {
            icon: '',
            name: "Sign up",
            link:"/singup"
        },
        {
            icon: '',
            name: "Cart",
            sup: 2,
            link:"/cart"
        }
    ];

    return (
        <>
            <div className="background_color w-full fixed top-0 h-full duration-300 z-30" onClick={() => setToggle(!toggle)}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden"
                }}>
            </div>
            <div className="bg-white w-[100%] md:w-[500px] h-full absolute duration-500 z-40"
                style={{
                    left: toggle ? "0%" : "-100%",
                }}>
            </div>
            <header className="p-3 shadow-xl">
                <div className="max-w-[1200px] mx-auto  flex items-center">
                    <div className="w-[80px]">
                        <img src="./images/swiggy_logo.jfif" alt="" className="w-full" />
                    </div>
                    <div className="flex-grow">
                        <span className="font-bold border-[orange] border-b-[3px] text-[orange]"> Ratanada </span>
                        Jodhpur, Rajasthan, India
                        <FaAngleDown className="inline text-[orange] cursor-pointer" onClick={() => setToggle(!toggle)} />
                    </div>
                    <nav className="ml-auto flex list-none gap-5 font-[400]">
                        <div className="flex items-center gap-1 hover:text-[orange] cursor-pointer" onClick={() => { setSearch(150) }}>
                            <CiSearch />
                            <p>Search</p>
                        </div>
                        <div className="">

                            <input type="text" placeholder="Search" id="searchinput"
                                className={`focus:outline-none  capitalize border border-[#0e0e0fb8] px-2 rounded duration-900 w-[${search}px]`}
                                style={{
                                    display: search < 150 ? 'none' : 'flex'
                                }}
                            />
                        </div>
                        {links.map((link, index) => (
                            <Link to="/" key={index}>
                                <div className="flex items-center gap-1 hover:text-[orange]">
                                    {link.icon}
                                 {link.link !=null ? <Link to={link.link}>{link.name}</Link> : `${link.name}`}
                                    {link.sup && <sup className="text-[red]">{link.sup}</sup>}
                                </div>
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
