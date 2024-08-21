import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";

function Items() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/admin/');
                setItems(response.data.data); // Assuming response.data.data is an array of items
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    function hander(index) { 
        setCart(index)
    }

    return (
        <>
            {items.map((data, index) => (
               
data.status === 'true' ? <div className="w-[235px]    grid grid-rows-2 overflow-hidden  " onClick={() => hander(index)} >
                        <div className="w-full h-[182px] object-cover divcartmonjy shrink-0 overflow-hidden relative rounded-[15px] overflow-hidden">
                            <div className="absolute top-2 right-[-40px] cartmojy p-2 bg-[#ffaacc] rounded-[50%]">dfd</div>
                            <img src={`http://localhost:5000/uploads/foodproduct/${data?.image}`} alt="" className="h-full w-full " />
                            <div className="absolute top-0 background left-0 h-full w-full text-white font-bold text-[25px] ps-2 flex items-end">
                                Item price ${data.price}
                            </div>
                        </div>
                        <div className="ps-[10px] font-[700] font-mono">
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
                            <div className="capitalize font-[500] text-[16px] text_color_address">
                                <div className="">{data.category}</div>
                                <div className="">{(data.address).substring(0,17)+"..."}</div>

                            </div>
                        </div>
                    </div>: ""                
            ))}
        </>
    );
}

export default Items;
