import { createContext, useState } from "react";


const context = createContext();

function MainContext(props){
const [searchValue, SetSearchValue] = useState();

    
    return (
      <context.Provider value={{SetSearchValue,searchValue}}>
        {
            props.children
        }
      </context.Provider>
    )
}

export default MainContext;
export {context};
