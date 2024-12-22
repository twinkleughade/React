import {useState} from "react"

function Show(){
    let [show, setShow]=useState(false)

    return(

        <>
        {/* <button onClick={()=>setShow(!show)}>Click here</button> */}
        <button onClick={()=>setShow(!show)}>
            {(show) ? "hide":"display"}
        </button>

        {(show) ? <h2>Success</h2> : ""}


        </>
    )
}
export default Show
