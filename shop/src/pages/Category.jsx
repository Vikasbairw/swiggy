import axios from "axios";
import { useEffect, useState } from "react";

function Category() {
    const [category, Setcategory] = useState();

    function getcategory() {
        axios.get("http://localhost:5000/food/").then(
            (suc) => {
                if (suc.data.status === true || 1) {
                    Setcategory(suc.data.suc);
                }

            }
        ).catch(
            (err) => {
                Setcategory(err?.data?.msg)
            }
        )
    }

    useEffect(
        () => {
            getcategory();
        }, []
    )


    return (
        <>
            {
                category?.map((image, index) => {
                    if (image?.status === "true") {
                        return (

                            <div className="w-[100px]  shrink-0  flex-grow flex-wrap" >
                                <img src={"http://localhost:5000/uploads/category/" + image.image} alt="" key={index} className="w-full " />
                            </div>

                        );
                    }else{
                        <p>hello</p>
                    }

                })
            }

        </>
    )
}
export default Category;