import React, {createContext} from "react";
import { cdata } from "./App";
import { data } from "./App";
import Child3 from 'Child3.jsx';

let newdata=createContext();
let name="twinkle ughade"
let age=26

const Child2=()=>{
    return(
        <>
        <cdata.Consumer>
            {
                (data)=>{
                    return(
                        <h1>happy{data}</h1>
                    )
                }
            }
        </cdata.Consumer>
        <newdata.Provider value={{name,age}}>
            <Child3/>
        </newdata.Provider>
        </>
    )
}
export default Child2