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
  "name":"twinkle",
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
  let arf=arr.map((e,index)=>{return <li key={index}>{e.id},{e.name},{e.age},{e.address}</li>})

  return (
    <>
      {arr.map((e,index)=>{return <h1 key={index}>{e.name}</h1>})}
      <ul>
      {arf}
        {/* <li>{arf}</li> */}
      </ul>
    </>
  )
}

export default App