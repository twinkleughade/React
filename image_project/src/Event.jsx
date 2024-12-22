const Event=()=>{
    
    function cl(){
        alert("clicked")
    }
    
    function dcl(){
        alert("clicked")
    }

    function onmouse(){
        alert("clicked")
    }

    function click(){
        alert("done")
    }

    function blr(){
        alert("blr")
    }

    return(
        <>
        <button onClick={cl}>Click here</button>
        <button onDoubleClick={dcl}>click</button>
        <button onMouseDown={onmouse}>onmouse</button>
        <button onMouseEnter={click}>click</button>
        <button onBlur={blr}>click</button>
        <button onClick={()=>alert("inline event")}>Inline</button>  
        {/* we can do inline  */}
        </>
    )
}
export default Event