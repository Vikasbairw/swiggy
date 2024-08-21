import { useState } from "react";
import Category from "./Category";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Items from "./Items";
import SeachItems from "./SearchItems";


function Home() {
    const [value, setvalue] = useState(0)
    const [items, setitem] = useState(0)
    
    function front_move() {
        if (value > 0) {
            setvalue(value - 2);

        }
    };
    function end_move() {
        if (value < 6) {
            setvalue(value + 2);
        } else {
            alert("this is only item")
        }
    }

    // tow part start function
    function front_move_item() {
        if (items > 0) {
            setitem(items - 3);
        }
    };
    function end_move_item() {
        setitem(items + 3);
    }
    return (
        <>
            <div className="max-w-[1000px] mx-auto  overflow-hidden  ">
                <div className="">
                    <div className="">
                        <div className="font-[500] font-[25px] pt-[30px]">What's on your mind? </div>
                        <div className="flex gap-2 justify-end me-[40px]">
                            <div className="h-[30px] w-[30px] bg-[#2312] flex items-center justify-center rounded-[50%]" onClick={() => front_move()}><FaLongArrowAltLeft /></div>
                            <div className="h-[30px] w-[30px] bg-[#2312] flex items-center justify-center rounded-[50%]" onClick={() => end_move()}><FaLongArrowAltRight /></div>

                        </div>
                    </div>
                    <div className=" flex duration-500  " style={{
                        transform: `translate(-${value * 150}px) `
                    }}>
                        <Category />
                    </div>

                </div>

                {/* section part items */}

                <div className="my-5 ">
                    <div className="">
                        <div className="font-[500] text-[25px] font-bold">The best milk item of Rajasthan? </div>
                        <div className="flex gap-2 justify-end me-[40px]">
                            <div className="h-[30px] w-[30px] bg-[#2312] flex items-center justify-center rounded-[50%]" onClick={() => front_move_item()}><FaLongArrowAltLeft /></div>
                            <div className="h-[30px] w-[30px] bg-[#2312] flex items-center justify-center rounded-[50%]" onClick={() => end_move_item()}><FaLongArrowAltRight /></div>

                        </div>
                    </div>
                    <div className="flex gap-[20px]  mt-5  duration-500   " style={{
                        transform: `translate(-${items * 288}px) `
                    }}>
                        <div className=" flex   flex-nowrap gap-4 flex-grow">
                            <Items />
                        </div>
                        
                    </div>

                </div>
                <hr />

                {/* four part */}

                <div className="mt-5 flex flex-col items-center md:block">
                    <div className="">
                        <div className="font-bold text-[25px] pb-4">The best milk item of Rajasthan? </div>
                    </div>
                    <div className="property  " >
                    <SeachItems/>
                    </div>

                </div>
                <hr />
            </div>
            
        </>
    )
}
export default Home;