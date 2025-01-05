import { createContext } from 'react'
import Child1 from 'Child1.jsx'

let cdata = createContext();
let data="new year"

function App() {
 
  return (
    <>
    <cdata.Provider value={data}>
    <Child1/>
    </cdata.Provider>
      
    </>
  )
}

export default App
export {data}
export {cdata}
