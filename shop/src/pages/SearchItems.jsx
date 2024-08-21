import { Link } from "react-router-dom";
import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import { context } from "../Context/MainContext";

function SeachItems() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState()


    const { searchValue } = useContext(context);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searchValue == undefined) {
                    const response = await axios.get('http://localhost:5000/admin/');
                    if (response.data.status == 1) {
                        await setItems(response.data.data);
                    }

                } else {

                    console.log("hello", searchValue)
                    const response = await axios.get('http://localhost:5000/admin/' + searchValue);
                    if (response.data.status == 1) {
                        await console.log(response.data.data);
                    }

                }



            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [searchValue]);

    function hander(index) {
        setCart(index)
    }


    function Cartvalue(id) {
var cart=[];
cart.push(id);

localStorage.setItem( "cart",JSON.stringify(...cart));
    }

    return (
        <>
            {items?.map((data, index) => (

                data.status === 'true' ? <div className="w-[235px]   grid grid-rows-2 overflow-hidden  " onClick={() => hander(index)} >
                    <div className="w-full h-[182px] object-cover  shrink-0 overflow-hidden  relative rounded-[15px] overflow-hidden" id="cartHove">
                        <Link key={index} to={`/cart/${data._id}`}>
                            <img src={`http://localhost:5000/uploads/foodproduct/${data?.image}`} alt="" className="h-full w-full " />
                            <div className="absolute top-0 background left-0 h-full w-full text-white font-bold text-[25px] ps-2 flex items-end">
                                Item price ${data.price}
                            </div>
                            </Link>
                    </div>
                    <div className="ps-[10px] font-[700] font-mono relative">
                        <h1 className=" text-[18px] capitalize font-sans">{data.name}</h1>
                        <div className="flex items-center gap-2 text_color_items ">
                            <div className="text-[20px]">
                                <FcRating />
                            </div>
                            <div className="">
                                {data.rating}
                            </div>
                            <div className="">
                                {data.ordertime}min
                            </div>
                        </div>
                        <div className="absolute top-2 right-[40px] p-1 bg-[#ffaacc] rounded-[50%] cursor-pointer z-[99999]" id="addTocartB" onClick={()=>Cartvalue(data._id)}>😴</div>

                        <div className="capitalize font-[500] text-[16px] text_color_address">
                            <div className="">{data.category}</div>
                            <div className="">{(data.address).substring(0, 17) + "..."}</div>

                        </div>
                    </div>
                </div> : ""
            ))}
        </>
    );
}

export default SeachItems;
