import { configureStore } from "@reduxjs/toolkit";
import { searching } from "../Redux/Search";

const SearchStore = configureStore(
{
    reducer:{
        search :searching
    }

}
);


export default  SearchStore;