
function Filter(){

    let arr=[1,2,3,4,5,6,7,8,9,10]
      
     let fil = arr.filter((e)=>{return e>3})
     console.log(fil);

    return(
        <>
         
         <ul>
            {
                fil.map((e,index)=>{return <li key={index}>{e}</li>})
            }
         </ul>
        </>
    )
}
export default Filter