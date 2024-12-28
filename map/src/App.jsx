import Filter from './Filter.jsx'

function App() {

  
  let arr =[{
    "id":"1",
    "name":"twinkle",
    "age":"26",
    "address":"bhopal"
  }
,
{
  "id":"2",
  "name":"twi",
  "age":"26",
  "address":"bhopal"
}
,
{
  "id":"3",
  "name":"twinkle",
  "age":"26",
  "address":"bhopal"
}
,
{
  "id":"4",
  "name":"twinkle",
  "age":"26",
  "address":"bhopal"
}]
  // let arf=arr.map((e,index)=>{return <li key={index}>{e.id},{e.name},{e.age},{e.address}</li>})
  let ar_obj=arr.map((e)=>{return <h1 key={e.id}> {e.name}-{e.age}-{e.address}</h1>})

  return (
    <>
      <Filter/>




      {arr.map((e,index)=>{return <h1 key={index}>{e.name}</h1>})}
      <ul>
      {/* {arf} */}
      <li>{ar_obj}</li> 
      </ul>
    </>
  )
}

export default App